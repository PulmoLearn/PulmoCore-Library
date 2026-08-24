/**
 * PulmoLearn Activity Progress Tracker v2.0
 *
 * For standalone PulmoLearn practice activities and scenarios.
 *
 * Uses the same Supabase auth + activity-analytics pathway as the proven
 * PulmoLearn lesson progress tracker, while allowing standalone activities
 * to explicitly report their overall percentage/completion.
 *
 * IMPORTANT:
 * - Tracking failures never block the learning activity.
 * - Canvas passback requires a real authenticated PulmoLearn session.
 * - Canvas Test Student / Student View may run locally without a real
 *   PulmoLearn session; in that case server/dashboard/passback are skipped.
 */

import { supabase } from '/assets/auth.js'
import { initializeActivityAnalytics } from '/assets/activity-analytics.js'

console.log('PulmoLearn: activity-progress-tracker.js v2.0 loaded')

const params = new URLSearchParams(window.location.search)
const isLtiLaunch = params.get('lti') === '1'
if (isLtiLaunch) window.PULMO_LTI_MODE = true

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

let session = null
let userId = null
let analyticsInitialized = false
let saveTimer = null
let lastPercent = 0
let completedEver = false
let lastSavedSignature = ''
let passbackInFlight = false
let sessionStart = Date.now()
let lastElapsedSaved = 0

const ltiPassbackKey = lessonId
  ? `pulmolearn-lti-passback:${lessonId}`
  : null

function clampPercent(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return null
  return Math.max(0, Math.min(100, Math.round(n)))
}

function parseVisiblePercent() {
  const selectors = [
    '#overallProgress',
    '#progressText',
    '[data-progress-percent]',
    '[role="progressbar"][aria-valuenow]',
    '#overallProgressBar',
    '#progressBar',
    '.progress-bar'
  ]

  const values = []

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      const data = clampPercent(
        el.dataset?.progressPercent ?? el.dataset?.percent
      )
      if (data !== null) values.push(data)

      const aria = clampPercent(el.getAttribute?.('aria-valuenow'))
      if (aria !== null) values.push(aria)

      const text = String(el.textContent || '')
      const pct = text.match(/(\d+(?:\.\d+)?)\s*%/)
      if (pct) {
        const v = clampPercent(pct[1])
        if (v !== null) values.push(v)
      }

      const fraction = text.match(/(\d+)\s*(?:of|\/)\s*(\d+)/i)
      if (fraction) {
        const done = Number(fraction[1])
        const total = Number(fraction[2])
        if (Number.isFinite(done) && Number.isFinite(total) && total > 0) {
          values.push(clampPercent(done / total * 100))
        }
      }

      const width = String(el.style?.width || '').match(/(\d+(?:\.\d+)?)\s*%/)
      if (width) {
        const v = clampPercent(width[1])
        if (v !== null) values.push(v)
      }
    })
  })

  return values.length ? Math.max(...values.filter(v => v !== null)) : 0
}

function ensureAnalyticsRoot() {
  let root =
    document.querySelector(`[data-activity-id="${CSS.escape(String(activityId || ''))}"]`) ||
    document.querySelector('[data-pulmolearn-standalone-activity]') ||
    document.querySelector('main') ||
    document.body

  if (!root) return null

  root.dataset.pulmolearnStandaloneActivity = 'true'
  if (activityId) root.dataset.activityId = activityId
  root.dataset.activityName = activityName
  root.dataset.activityType = activityType
  root.dataset.courseId = courseId
  if (lessonId) root.dataset.lessonId = lessonId
  root.dataset.required = 'true'

  return root
}

const analyticsRoot = ensureAnalyticsRoot()

function getElapsedDelta() {
  const elapsed = Math.max(0, Math.floor((Date.now() - sessionStart) / 1000))
  const delta = Math.max(0, elapsed - lastElapsedSaved)
  lastElapsedSaved = elapsed
  return delta
}

function getState() {
  const visible = parseVisiblePercent()
  const percent = Math.max(lastPercent, visible || 0)
  const rootComplete = analyticsRoot?.dataset?.complete === 'true'
  const completed = completedEver || rootComplete || percent >= 100

  lastPercent = completed ? 100 : clampPercent(percent) ?? 0
  completedEver = completed

  return {
    percent: lastPercent,
    completed: completedEver,
    lessonId,
    courseId,
    activityId,
    activityName,
    activityType,
    isLtiLaunch,
    sessionPresent: Boolean(session),
    userId
  }
}

async function sendLtiCompletionPassback() {
  if (
    !completedEver ||
    !isLtiLaunch ||
    !session?.access_token ||
    !lessonId ||
    passbackInFlight
  ) return

  if (ltiPassbackKey && sessionStorage.getItem(ltiPassbackKey) === 'sent') {
    return
  }

  passbackInFlight = true

  try {
    const response = await fetch('/api/lti/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_token: session.access_token,
        lesson_id: lessonId,
        completed: true
      })
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok || !result?.ok || !result?.passed_back) {
      console.warn(
        'PulmoLearn activity tracker: Canvas passback not confirmed:',
        result?.error || `HTTP ${response.status}`,
        result
      )
      return
    }

    if (ltiPassbackKey) sessionStorage.setItem(ltiPassbackKey, 'sent')

    console.log(
      `PulmoLearn activity tracker: Canvas completion confirmed — ${lessonId}`
    )
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: Canvas passback failed safely:',
      error
    )
  } finally {
    passbackInFlight = false
  }
}

async function readCurrentLessonProgress() {
  if (!userId || !lessonId) return null

  try {
    const { data, error } = await supabase
      .from('lesson_progress')
      .select('percent_complete, completed, total_seconds, completed_at')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .maybeSingle()

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: lesson_progress read failed:',
        error.message
      )
      return null
    }

    return data || null
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: lesson_progress read failed safely:',
      error
    )
    return null
  }
}

async function saveServerProgress(reason = 'change') {
  const state = getState()

  if (!userId || !session || !lessonId) {
    if (isLtiLaunch) {
      console.info(
        `PulmoLearn activity tracker: local-only ${state.percent}% (${reason}). ` +
        'No authenticated PulmoLearn session is present; Canvas Test Student/Student View cannot be used to verify account-linked dashboard/passback.'
      )
    }
    return
  }

  const signature = `${state.percent}|${state.completed ? 1 : 0}`

  if (reason !== 'heartbeat' && signature === lastSavedSignature) {
    if (state.completed) await sendLtiCompletionPassback()
    return
  }

  lastSavedSignature = signature

  try {
    const now = new Date().toISOString()
    const prior = await readCurrentLessonProgress()
    const completed = Boolean(prior?.completed) || state.completed
    const percent = completed
      ? 100
      : Math.max(
          Number(prior?.percent_complete || 0),
          Number(state.percent || 0)
        )

    const deltaSeconds = getElapsedDelta()
    const totalSeconds =
      Number(prior?.total_seconds || 0) + deltaSeconds

    const legacyPayload = {
      user_id: userId,
      lesson_id: lessonId,
      percent,
      completed,
      updated_at: now
    }

    if (completed) {
      legacyPayload.completed_at =
        prior?.completed_at || now
    }

    const { error: legacyError } = await supabase
      .from('progress')
      .upsert(legacyPayload, {
        onConflict: 'user_id,lesson_id'
      })

    if (legacyError) {
      console.warn(
        'PulmoLearn activity tracker: progress save failed:',
        legacyError.message
      )
    }

    const lessonPayload = {
      user_id: userId,
      lesson_id: lessonId,
      course_id: courseId,
      lesson_title: lessonTitle,
      percent_complete: percent,
      completed,
      total_seconds: totalSeconds,
      last_visited_at: now,
      updated_at: now
    }

    if (completed) {
      lessonPayload.completed_at =
        prior?.completed_at || now
    }

    const { error: lessonError } = await supabase
      .from('lesson_progress')
      .upsert(lessonPayload, {
        onConflict: 'user_id,lesson_id'
      })

    if (lessonError) {
      console.warn(
        'PulmoLearn activity tracker: lesson_progress save failed:',
        lessonError.message
      )
    } else {
      console.log(
        `PulmoLearn activity tracker: saved ${lessonId} — ${percent}% completed=${completed}`
      )
    }

    if (completed) await sendLtiCompletionPassback()
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: server sync failed safely:',
      error
    )
  }
}

function markAnalyticsState(percent, completed) {
  if (!analyticsRoot) return

  analyticsRoot.dataset.progressPercent = String(percent)
  analyticsRoot.dataset.complete = completed ? 'true' : 'false'

  document.dispatchEvent(
    new CustomEvent('pulmolearn:activity-progress', {
      detail: {
        activityId,
        lessonId,
        courseId,
        percent,
        completed
      }
    })
  )

  if (completed && analyticsRoot.dataset.completionEventSent !== 'true') {
    analyticsRoot.dataset.completionEventSent = 'true'

    document.dispatchEvent(
      new CustomEvent('activityComplete', {
        detail: {
          activityId,
          lessonId,
          courseId,
          activityName,
          activityType
        }
      })
    )
  }
}

function report(detail = {}) {
  const incomingPercent = clampPercent(detail.percent)
  if (incomingPercent !== null) {
    lastPercent = Math.max(lastPercent, incomingPercent)
  }

  if (detail.completed === true || lastPercent >= 100) {
    completedEver = true
    lastPercent = 100
  }

  markAnalyticsState(lastPercent, completedEver)

  clearTimeout(saveTimer)
  saveTimer = setTimeout(
    () => saveServerProgress('explicit-report'),
    350
  )

  return getState()
}

window.PulmoActivityProgress = {
  report,
  sync: () => saveServerProgress('manual-sync'),
  getState
}

window.addEventListener(
  'pulmolearn:activity-progress-report',
  event => report(event.detail || {})
)

async function initialize() {
  try {
    const {
      data: { session: currentSession },
      error
    } = await supabase.auth.getSession()

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: auth lookup failed:',
        error.message
      )
    }

    session = currentSession || null
    userId = session?.user?.id || null

    console.log('PulmoLearn activity tracker context:', {
      lessonId,
      courseId,
      activityId,
      isLtiLaunch,
      sessionPresent: Boolean(session),
      userId: userId || '(none)'
    })

    if (session && userId && lessonId && analyticsRoot) {
      try {
        initializeActivityAnalytics({
          userId,
          lessonId,
          courseId
        })
        analyticsInitialized = true
        console.log(
          'PulmoLearn activity tracker: existing activity analytics initialized.'
        )
      } catch (error) {
        console.warn(
          'PulmoLearn activity tracker: activity analytics initialization failed safely:',
          error
        )
      }
    } else if (isLtiLaunch && !session) {
      console.info(
        'PulmoLearn activity tracker: LTI page has no PulmoLearn session. ' +
        'This is expected in some Canvas Test Student/Student View launches. ' +
        'Local activity use continues, but server analytics and Canvas score passback cannot be verified in this state.'
      )
    }

    const prior = await readCurrentLessonProgress()

    if (prior) {
      lastPercent = Math.max(
        lastPercent,
        Number(prior.percent_complete || 0)
      )

      if (prior.completed) {
        completedEver = true
        lastPercent = 100
      }
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: initialization failed safely:',
      error
    )
  }

  const initial = getState()
  markAnalyticsState(initial.percent, initial.completed)
  await saveServerProgress('initial')

  const observer = new MutationObserver(() => {
    const visible = parseVisiblePercent()

    if (visible > lastPercent || visible >= 100) {
      report({
        percent: visible,
        completed: visible >= 100
      })
    }
  })

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: [
      'style',
      'class',
      'aria-valuenow',
      'data-progress-percent',
      'data-complete'
    ]
  })

  document.addEventListener('click', () => {
    setTimeout(() => {
      const p = parseVisiblePercent()
      report({ percent: p, completed: p >= 100 })
    }, 75)
  }, true)

  document.addEventListener('change', () => {
    setTimeout(() => {
      const p = parseVisiblePercent()
      report({ percent: p, completed: p >= 100 })
    }, 75)
  }, true)

  setInterval(() => {
    const p = parseVisiblePercent()
    if (p > lastPercent) {
      report({ percent: p, completed: p >= 100 })
    } else {
      saveServerProgress('heartbeat')
    }
  }, 30000)
}

initialize().catch(error => {
  console.warn(
    'PulmoLearn activity tracker: disabled after safe initialization failure:',
    error
  )
})
