/**
 * PulmoLearn Activity Progress Tracker v3.1
 * 2026-08-24
 *
 * HOTFIX:
 * v3.0 used a MutationObserver that watched attributes the tracker itself wrote.
 * That could create a self-triggering mutation loop and freeze complex activities.
 *
 * v3.1:
 * - NO MutationObserver.
 * - Primary progress source = explicit activity events:
 *     pulmolearn:progress
 *     pulmolearn:complete
 *     pulmolearn:activity-progress-report
 * - Fallback = lightweight 2-second visible-progress poll.
 * - Keeps PulmoLearn lesson_progress + activity analytics behavior.
 * - Keeps signed Canvas AGS lti_ctx passback behavior.
 * - Tracking failures never block the learning activity.
 */

import { supabase } from '/assets/auth.js'
import { initializeActivityAnalytics } from '/assets/activity-analytics.js'

console.log('PulmoLearn: activity-progress-tracker.js v3.1 loaded')

const params = new URLSearchParams(window.location.search)
const isLtiLaunch = params.get('lti') === '1'

const meta = window.PULMO_LESSON || {}

const lessonId =
  window.PULMO_LESSON_ID ||
  window.LESSON_ID ||
  meta.lessonId ||
  meta.lesson_id ||
  null

const courseId =
  meta.courseId ||
  meta.course_id ||
  document.body?.dataset?.courseId ||
  'unknown'

const lessonTitle =
  meta.lessonTitle ||
  meta.lesson_title ||
  document.title ||
  lessonId ||
  'PulmoLearn Activity'

const activityId =
  meta.activityId ||
  meta.activity_id ||
  lessonId

const activityName =
  meta.activityName ||
  meta.activity_name ||
  lessonTitle

const activityType =
  meta.activityType ||
  meta.activity_type ||
  'standalone-practice'

const ctxStorageKey = lessonId
  ? `pulmolearn-lti-context:${lessonId}`
  : 'pulmolearn-lti-context'

let ltiContext = params.get('lti_ctx') || ''

if (ltiContext) {
  try {
    sessionStorage.setItem(ctxStorageKey, ltiContext)
  } catch (e) {}
} else {
  try {
    ltiContext = sessionStorage.getItem(ctxStorageKey) || ''
  } catch (e) {}
}

let session = null
let userId = null
let lastPercent = 0
let completedEver = false
let saveTimer = null
let passbackInFlight = false
let lastSavedSignature = ''
let sessionStart = Date.now()
let lastElapsedSaved = 0
let analyticsCompletionEventSent = false

const passbackKey = lessonId
  ? `pulmolearn-lti-passback:v3:${lessonId}`
  : 'pulmolearn-lti-passback:v3'

function clampPercent(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return null
  return Math.max(0, Math.min(100, Math.round(n)))
}

function parseVisiblePercent() {
  const values = []

  const add = value => {
    const v = clampPercent(value)
    if (v !== null) values.push(v)
  }

  const percentTextIds = [
    'overallProgress',
    'progressText'
  ]

  percentTextIds.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return

    const text = String(el.textContent || '')
    const match = text.match(/(\d+(?:\.\d+)?)\s*%/)
    if (match) add(match[1])
  })

  // Scenario format: "6 of 10 activities complete"
  const ltiText = document.getElementById('ltiProgressText')
  if (ltiText) {
    const text = String(ltiText.textContent || '')
    const fraction = text.match(/(\d+)\s*(?:of|\/)\s*(\d+)/i)

    if (fraction) {
      const done = Number(fraction[1])
      const total = Number(fraction[2])

      if (
        Number.isFinite(done) &&
        Number.isFinite(total) &&
        total > 0
      ) {
        add((done / total) * 100)
      }
    }
  }

  // Accessible progressbars.
  document
    .querySelectorAll('[role="progressbar"][aria-valuenow]')
    .forEach(el => add(el.getAttribute('aria-valuenow')))

  // Known progress fills. Reading only; tracker does not write these.
  const barIds = [
    'overallProgressBar',
    'ltiProgressBar',
    'progressBar'
  ]

  barIds.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return

    const width =
      String(el.style?.width || '')
        .match(/(\d+(?:\.\d+)?)\s*%/)

    if (width) add(width[1])
  })

  return values.length ? Math.max(...values) : 0
}

function ensureAnalyticsRoot() {
  let root = null

  try {
    if (activityId) {
      root =
        document.querySelector(
          `[data-activity-id="${CSS.escape(String(activityId))}"]`
        )
    }
  } catch (e) {}

  root =
    root ||
    document.querySelector('[data-pulmolearn-standalone-activity]') ||
    document.querySelector('main') ||
    document.body

  if (!root) return null

  // Set static metadata once.
  if (root.dataset.pulmolearnStandaloneActivity !== 'true') {
    root.dataset.pulmolearnStandaloneActivity = 'true'
  }

  if (activityId && root.dataset.activityId !== String(activityId)) {
    root.dataset.activityId = String(activityId)
  }

  if (root.dataset.activityName !== String(activityName)) {
    root.dataset.activityName = String(activityName)
  }

  if (root.dataset.activityType !== String(activityType)) {
    root.dataset.activityType = String(activityType)
  }

  if (root.dataset.courseId !== String(courseId)) {
    root.dataset.courseId = String(courseId)
  }

  if (lessonId && root.dataset.lessonId !== String(lessonId)) {
    root.dataset.lessonId = String(lessonId)
  }

  if (root.dataset.required !== 'true') {
    root.dataset.required = 'true'
  }

  return root
}

const analyticsRoot = ensureAnalyticsRoot()

function getElapsedDelta() {
  const elapsed =
    Math.max(
      0,
      Math.floor(
        (Date.now() - sessionStart) / 1000
      )
    )

  const delta =
    Math.max(
      0,
      elapsed - lastElapsedSaved
    )

  lastElapsedSaved = elapsed
  return delta
}

function getState() {
  const visible = parseVisiblePercent()

  if (visible > lastPercent) {
    lastPercent = visible
  }

  if (lastPercent >= 100) {
    completedEver = true
    lastPercent = 100
  }

  return {
    percent: lastPercent,
    completed: completedEver,
    lessonId,
    courseId,
    activityId,
    isLtiLaunch,
    hasLtiContext: Boolean(ltiContext),
    hasPulmoLearnSession: Boolean(session)
  }
}

function markAnalyticsState(percent, completed) {
  if (!analyticsRoot) return

  const percentString = String(percent)
  const completeString =
    completed ? 'true' : 'false'

  // Critical v3.1 guard: only write when the value changed.
  if (
    analyticsRoot.dataset.progressPercent !==
    percentString
  ) {
    analyticsRoot.dataset.progressPercent =
      percentString
  }

  if (
    analyticsRoot.dataset.complete !==
    completeString
  ) {
    analyticsRoot.dataset.complete =
      completeString
  }

  if (
    completed &&
    !analyticsCompletionEventSent
  ) {
    analyticsCompletionEventSent = true

    analyticsRoot.dispatchEvent(
      new CustomEvent(
        'activityComplete',
        {
          bubbles: true,
          detail: {
            activityId,
            lessonId,
            courseId,
            activityName,
            activityType
          }
        }
      )
    )
  }
}

async function sendLtiCompletionPassback() {
  if (
    !completedEver ||
    !isLtiLaunch ||
    !lessonId ||
    !ltiContext ||
    passbackInFlight
  ) {
    return
  }

  try {
    if (
      sessionStorage.getItem(passbackKey) ===
      'sent'
    ) {
      return
    }
  } catch (e) {}

  passbackInFlight = true

  try {
    const response =
      await fetch(
        '/api/lti/score',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json'
          },
          body:
            JSON.stringify({
              access_token:
                session?.access_token || null,
              lesson_id:
                lessonId,
              completed:
                true,
              lti_context:
                ltiContext
            })
        }
      )

    const result =
      await response
        .json()
        .catch(
          () => ({})
        )

    if (
      !response.ok ||
      !result?.ok ||
      !result?.passed_back
    ) {
      console.error(
        'PulmoLearn: Canvas completion passback failed:',
        result?.error ||
          `HTTP ${response.status}`,
        result
      )

      window.dispatchEvent(
        new CustomEvent(
          'pulmolearn:lti-passback-status',
          {
            detail: {
              ok: false,
              error:
                result?.error ||
                `HTTP ${response.status}`
            }
          }
        )
      )

      return
    }

    try {
      sessionStorage.setItem(
        passbackKey,
        'sent'
      )
    } catch (e) {}

    console.log(
      `PulmoLearn: Canvas completion passback confirmed — ${lessonId}`
    )

    window.dispatchEvent(
      new CustomEvent(
        'pulmolearn:lti-passback-status',
        {
          detail: {
            ok: true,
            passedBack: true
          }
        }
      )
    )
  } catch (error) {
    console.error(
      'PulmoLearn: Canvas passback error:',
      error
    )
  } finally {
    passbackInFlight = false
  }
}

async function readCurrentLessonProgress() {
  if (!userId || !lessonId) return null

  try {
    const {
      data,
      error
    } =
      await supabase
        .from('lesson_progress')
        .select(
          'percent_complete, completed, total_seconds, completed_at'
        )
        .eq(
          'user_id',
          userId
        )
        .eq(
          'lesson_id',
          lessonId
        )
        .maybeSingle()

    if (error) {
      console.warn(
        'PulmoLearn: lesson_progress read failed:',
        error.message
      )
      return null
    }

    return data || null
  } catch (error) {
    console.warn(
      'PulmoLearn: lesson_progress read failed safely:',
      error
    )
    return null
  }
}

async function saveServerProgress(reason = 'change') {
  const state = getState()

  // Canvas passback is independent of PulmoLearn DB progress.
  if (state.completed) {
    await sendLtiCompletionPassback()
  }

  if (
    !userId ||
    !session ||
    !lessonId
  ) {
    return
  }

  const signature =
    `${state.percent}|${state.completed ? 1 : 0}`

  if (
    reason !== 'heartbeat' &&
    signature === lastSavedSignature
  ) {
    return
  }

  lastSavedSignature = signature

  try {
    const now =
      new Date().toISOString()

    const prior =
      await readCurrentLessonProgress()

    const completed =
      Boolean(prior?.completed) ||
      state.completed

    const percent =
      completed
        ? 100
        : Math.max(
            Number(
              prior?.percent_complete || 0
            ),
            Number(
              state.percent || 0
            )
          )

    const deltaSeconds =
      getElapsedDelta()

    const totalSeconds =
      Number(
        prior?.total_seconds || 0
      ) +
      deltaSeconds

    const legacyPayload = {
      user_id:
        userId,
      lesson_id:
        lessonId,
      percent,
      completed,
      updated_at:
        now
    }

    if (completed) {
      legacyPayload.completed_at =
        prior?.completed_at || now
    }

    const {
      error: legacyError
    } =
      await supabase
        .from('progress')
        .upsert(
          legacyPayload,
          {
            onConflict:
              'user_id,lesson_id'
          }
        )

    if (legacyError) {
      console.warn(
        'PulmoLearn: progress save failed:',
        legacyError.message
      )
    }

    const lessonPayload = {
      user_id:
        userId,
      lesson_id:
        lessonId,
      course_id:
        courseId,
      lesson_title:
        lessonTitle,
      percent_complete:
        percent,
      completed,
      total_seconds:
        totalSeconds,
      last_visited_at:
        now,
      updated_at:
        now
    }

    if (completed) {
      lessonPayload.completed_at =
        prior?.completed_at || now
    }

    const {
      error: lessonError
    } =
      await supabase
        .from('lesson_progress')
        .upsert(
          lessonPayload,
          {
            onConflict:
              'user_id,lesson_id'
          }
        )

    if (lessonError) {
      console.warn(
        'PulmoLearn: lesson_progress save failed:',
        lessonError.message
      )
    }
  } catch (error) {
    console.warn(
      'PulmoLearn: server sync failed safely:',
      error
    )
  }
}

function report(detail = {}) {
  let incomingPercent =
    clampPercent(
      detail.percent
    )

  // Support scenario event shape:
  // { completed: 7, total: 10, percent: 70 }
  if (
    incomingPercent === null &&
    Number.isFinite(
      Number(detail.completed)
    ) &&
    Number.isFinite(
      Number(detail.total)
    ) &&
    Number(detail.total) > 0
  ) {
    incomingPercent =
      clampPercent(
        Number(detail.completed) /
        Number(detail.total) *
        100
      )
  }

  if (
    incomingPercent !== null &&
    incomingPercent > lastPercent
  ) {
    lastPercent =
      incomingPercent
  }

  const booleanCompleted =
    detail.completed === true ||
    detail.complete === true

  if (
    booleanCompleted ||
    lastPercent >= 100
  ) {
    completedEver = true
    lastPercent = 100
  }

  markAnalyticsState(
    lastPercent,
    completedEver
  )

  clearTimeout(saveTimer)

  saveTimer =
    setTimeout(
      () =>
        saveServerProgress(
          'explicit-report'
        ),
      250
    )

  return getState()
}

window.PulmoActivityProgress = {
  report,
  sync:
    () =>
      saveServerProgress(
        'manual-sync'
      ),
  getState
}

// PA / standalone activity format.
window.addEventListener(
  'pulmolearn:activity-progress-report',
  event =>
    report(
      event.detail || {}
    )
)

// Neonatal scenario format.
window.addEventListener(
  'pulmolearn:progress',
  event =>
    report(
      event.detail || {}
    )
)

window.addEventListener(
  'pulmolearn:complete',
  event =>
    report({
      ...(event.detail || {}),
      percent: 100,
      completed: true
    })
)

async function initialize() {
  try {
    const {
      data: {
        session: currentSession
      },
      error
    } =
      await supabase
        .auth
        .getSession()

    if (error) {
      console.warn(
        'PulmoLearn: auth lookup failed:',
        error.message
      )
    }

    session =
      currentSession || null

    userId =
      session?.user?.id || null

    console.log(
      'PulmoLearn activity tracker context:',
      {
        version: '3.1',
        lessonId,
        courseId,
        activityId,
        isLtiLaunch,
        hasLtiContext:
          Boolean(ltiContext),
        sessionPresent:
          Boolean(session)
      }
    )

    if (
      session &&
      userId &&
      lessonId &&
      analyticsRoot
    ) {
      try {
        initializeActivityAnalytics({
          userId,
          lessonId,
          courseId
        })
      } catch (error) {
        console.warn(
          'PulmoLearn: activity analytics initialization failed safely:',
          error
        )
      }
    }

    const prior =
      await readCurrentLessonProgress()

    if (prior) {
      lastPercent =
        Math.max(
          lastPercent,
          Number(
            prior.percent_complete || 0
          )
        )

      if (prior.completed) {
        completedEver = true
        lastPercent = 100
      }
    }
  } catch (error) {
    console.warn(
      'PulmoLearn: tracker initialization failed safely:',
      error
    )
  }

  // Give the activity time to restore its local persistence first.
  await new Promise(
    resolve =>
      setTimeout(
        resolve,
        450
      )
  )

  const visible =
    parseVisiblePercent()

  if (visible > lastPercent) {
    lastPercent = visible
  }

  if (lastPercent >= 100) {
    completedEver = true
    lastPercent = 100
  }

  markAnalyticsState(
    lastPercent,
    completedEver
  )

  await saveServerProgress(
    'initial'
  )

  /*
   * SAFE FALLBACK POLL
   * No DOM observer. Every 2 seconds we READ the existing progress UI.
   * We only report when the percentage actually increases.
   */
  setInterval(
    () => {
      try {
        const visibleNow =
          parseVisiblePercent()

        if (
          visibleNow >
          lastPercent
        ) {
          report({
            percent:
              visibleNow,
            completed:
              visibleNow >= 100
          })
        }
      } catch (error) {
        console.warn(
          'PulmoLearn: fallback progress check failed safely:',
          error
        )
      }
    },
    2000
  )

  // Time/visit heartbeat only; no DOM writes or scans beyond state.
  setInterval(
    () => {
      saveServerProgress(
        'heartbeat'
      )
    },
    30000
  )
}

initialize()
  .catch(
    error => {
      console.warn(
        'PulmoLearn: activity tracker disabled after safe initialization failure:',
        error
      )
    }
  )
