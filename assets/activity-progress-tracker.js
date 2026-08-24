/**
 * PulmoLearn Activity Progress Tracker v1.0
 * Hotfix bridge for standalone PulmoLearn practice activities / scenarios.
 *
 * PURPOSE
 * - Leaves the activity's existing UI and localStorage logic alone.
 * - Reads the activity's existing progress display (percent or "X of Y ... complete").
 * - Syncs top-level activity progress to:
 *     1) progress
 *     2) lesson_progress
 *     3) activity_progress
 * - Sends Canvas LTI completion through the same /api/lti/score endpoint
 *   used by the standard PulmoLearn progress tracker.
 *
 * SAFE INSTALL
 * Add this near the end of each standalone activity, before </body>:
 *
 *   <script type="module" src="/assets/activity-progress-tracker.js"></script>
 *
 * The activity should already define window.PULMO_LESSON and/or
 * window.PULMO_LESSON_ID / window.LESSON_ID.
 *
 * OPTIONAL EXPLICIT REPORTING
 * Existing activity code may call:
 *
 *   window.PulmoActivityProgress?.report({
 *     percent: 75,
 *     completed: false,
 *     attempts: 1
 *   })
 *
 * or on final completion:
 *
 *   window.PulmoActivityProgress?.report({
 *     percent: 100,
 *     completed: true
 *   })
 *
 * The automatic DOM observer means this explicit call is normally NOT required
 * for PulmoLearn activities that already update a visible progress bar/text.
 */

import { supabase } from '/assets/auth.js'

console.log('PulmoLearn: activity-progress-tracker.js v1.0 loaded')

const SAVE_DEBOUNCE_MS = 900
const INITIAL_SYNC_DELAY_MS = 1400
const HEARTBEAT_MS = 30000

const urlParams = new URLSearchParams(window.location.search)
const isLtiLaunch = urlParams.get('lti') === '1'

const lessonMeta = window.PULMO_LESSON || {}
const lessonId =
  window.PULMO_LESSON_ID ||
  window.LESSON_ID ||
  lessonMeta.lessonId ||
  lessonMeta.lesson_id ||
  null

const courseId =
  lessonMeta.courseId ||
  lessonMeta.course_id ||
  document.body?.dataset?.courseId ||
  'unknown'

const lessonTitle =
  lessonMeta.lessonTitle ||
  lessonMeta.lesson_title ||
  document.title ||
  lessonId ||
  'PulmoLearn Activity'

const activityId =
  lessonMeta.activityId ||
  lessonMeta.activity_id ||
  lessonId

const activityName =
  lessonMeta.activityName ||
  lessonMeta.activity_name ||
  lessonTitle

const activityType =
  lessonMeta.activityType ||
  lessonMeta.activity_type ||
  (lessonMeta.scenario ? 'clinical-scenario' : 'standalone-practice')

let session = null
let userId = null
let serverSyncEnabled = false

let sessionStartTime = Date.now()
let lastSavedElapsedSeconds = 0

let knownPercent = 0
let knownCompleted = false
let explicitPercent = null
let explicitCompleted = null
let explicitAttempts = null

let saveTimer = null
let saveInFlight = false
let saveQueued = false
let lastSavedSignature = ''
let initializationComplete = false

let existingLessonProgress = null
let existingActivityProgress = null

const ltiPassbackKey = lessonId
  ? `pulmolearn-lti-passback:${lessonId}`
  : null

function clampPercent(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return null
  return Math.max(0, Math.min(100, Math.round(number)))
}

function parsePercentText(text) {
  if (!text) return null

  const normalized = String(text).replace(/\s+/g, ' ').trim()

  const percentMatch = normalized.match(/(\d+(?:\.\d+)?)\s*%/)
  if (percentMatch) {
    return clampPercent(percentMatch[1])
  }

  const fractionMatch = normalized.match(
    /(\d+)\s*(?:of|\/)\s*(\d+)(?:\s+\w+){0,4}\s*(?:complete|completed|done)?/i
  )

  if (fractionMatch) {
    const complete = Number(fractionMatch[1])
    const total = Number(fractionMatch[2])

    if (Number.isFinite(complete) && Number.isFinite(total) && total > 0) {
      return clampPercent((complete / total) * 100)
    }
  }

  return null
}

function percentFromElement(element) {
  if (!element) return null

  const dataPercent =
    element.dataset?.progressPercent ??
    element.dataset?.percent ??
    null

  const fromData = clampPercent(dataPercent)
  if (fromData !== null) return fromData

  const ariaNow = element.getAttribute?.('aria-valuenow')
  const fromAria = clampPercent(ariaNow)
  if (fromAria !== null) return fromAria

  const fromText = parsePercentText(element.textContent)
  if (fromText !== null) return fromText

  const inlineWidth = element.style?.width || ''
  const widthMatch = inlineWidth.match(/(\d+(?:\.\d+)?)\s*%/)
  if (widthMatch) {
    return clampPercent(widthMatch[1])
  }

  return null
}

function inferVisibleProgress() {
  const selectors = [
    '#overallProgress',
    '#progressText',
    '[data-progress-percent]',
    '[role="progressbar"][aria-valuenow]',
    '#overallProgressBar',
    '#progressBar',
    '.progress-bar',
    '.progress > span',
    '.progress > div',
    '.progressbar > span'
  ]

  const candidates = []

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      const value = percentFromElement(element)
      if (value !== null) candidates.push(value)
    })
  })

  // Extra completion signals used by several standalone activities.
  const explicitComplete =
    document.body?.dataset?.complete === 'true' ||
    document.documentElement?.dataset?.complete === 'true' ||
    document.querySelector('[data-activity-complete="true"]') !== null ||
    document.querySelector('#completion.show') !== null

  const percent = candidates.length ? Math.max(...candidates) : 0

  return {
    percent: explicitComplete ? 100 : percent,
    completed: explicitComplete || percent >= 100
  }
}

function getSessionDeltaSeconds() {
  const elapsed = Math.max(
    0,
    Math.floor((Date.now() - sessionStartTime) / 1000)
  )

  const delta = Math.max(0, elapsed - lastSavedElapsedSeconds)
  lastSavedElapsedSeconds = elapsed
  return delta
}

function currentState() {
  const inferred = inferVisibleProgress()

  let percent =
    explicitPercent !== null
      ? explicitPercent
      : inferred.percent

  let completed =
    explicitCompleted !== null
      ? explicitCompleted
      : inferred.completed

  // Never move backward within a visit.
  percent = Math.max(knownPercent, percent || 0)
  completed = knownCompleted || completed || percent >= 100

  // Preserve a completion already present on the server.
  if (existingLessonProgress?.completed || existingActivityProgress?.completed) {
    completed = true
    percent = 100
  } else {
    percent = Math.max(
      percent,
      Number(existingLessonProgress?.percent_complete || 0)
    )
  }

  percent = clampPercent(percent) ?? 0

  if (completed) percent = 100

  knownPercent = percent
  knownCompleted = completed

  return { percent, completed }
}

async function loadExistingServerState() {
  if (!serverSyncEnabled || !lessonId || !activityId) return

  try {
    const { data, error } = await supabase
      .from('lesson_progress')
      .select('percent_complete, completed, total_seconds, completed_at')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .maybeSingle()

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: could not read lesson_progress:',
        error.message
      )
    } else if (data) {
      existingLessonProgress = data
      knownPercent = Math.max(
        knownPercent,
        Number(data.percent_complete || 0)
      )
      knownCompleted = knownCompleted || Boolean(data.completed)
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: lesson_progress read error:',
      error
    )
  }

  try {
    const { data, error } = await supabase
      .from('activity_progress')
      .select(
        'attempts, time_seconds, completed, completed_at, updated_at'
      )
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .eq('activity_id', activityId)
      .maybeSingle()

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: could not read activity_progress:',
        error.message
      )
    } else if (data) {
      existingActivityProgress = data
      knownCompleted = knownCompleted || Boolean(data.completed)
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: activity_progress read error:',
      error
    )
  }
}

async function saveLegacyProgress(percent, completed, now) {
  try {
    const payload = {
      user_id: userId,
      lesson_id: lessonId,
      percent,
      completed,
      updated_at: now
    }

    if (completed) {
      payload.completed_at =
        existingLessonProgress?.completed_at || now
    }

    const { error } = await supabase
      .from('progress')
      .upsert(payload, {
        onConflict: 'user_id,lesson_id'
      })

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: progress save failed:',
        error.message
      )
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: progress save error:',
      error
    )
  }
}

async function saveLessonProgress(percent, completed, now, deltaSeconds) {
  try {
    const previousSeconds = Number(
      existingLessonProgress?.total_seconds || 0
    )

    const totalSeconds = previousSeconds + deltaSeconds

    const payload = {
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
      payload.completed_at =
        existingLessonProgress?.completed_at || now
    }

    const { error } = await supabase
      .from('lesson_progress')
      .upsert(payload, {
        onConflict: 'user_id,lesson_id'
      })

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: lesson_progress save failed:',
        error.message
      )
      return
    }

    existingLessonProgress = {
      ...(existingLessonProgress || {}),
      ...payload
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: lesson_progress save error:',
      error
    )
  }
}

async function saveActivityProgress(completed, now, deltaSeconds, percent) {
  if (!activityId) return

  try {
    // Read the current row first so this hotfix does not depend on a
    // particular unique-index name in Supabase.
    const { data: currentRow, error: readError } = await supabase
      .from('activity_progress')
      .select('attempts, time_seconds, completed, completed_at')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .eq('activity_id', activityId)
      .maybeSingle()

    if (readError) {
      console.warn(
        'PulmoLearn activity tracker: activity_progress read-before-save failed:',
        readError.message
      )
      return
    }

    const previousAttempts = Number(
      currentRow?.attempts ??
      existingActivityProgress?.attempts ??
      0
    )

    const previousSeconds = Number(
      currentRow?.time_seconds ??
      existingActivityProgress?.time_seconds ??
      0
    )

    // For this top-level activity record, attempts means "activity started"
    // unless the activity explicitly reports a more meaningful attempt count.
    const attempts =
      explicitAttempts !== null
        ? Math.max(previousAttempts, Number(explicitAttempts || 0))
        : Math.max(previousAttempts, percent > 0 ? 1 : 0)

    const rowCompleted =
      Boolean(currentRow?.completed) ||
      Boolean(existingActivityProgress?.completed) ||
      completed

    const payload = {
      user_id: userId,
      course_id: courseId,
      lesson_id: lessonId,
      activity_id: activityId,
      activity_name: activityName,
      activity_type: activityType,
      attempts,
      time_seconds: previousSeconds + deltaSeconds,
      completed: rowCompleted,
      updated_at: now
    }

    if (rowCompleted) {
      payload.completed_at =
        currentRow?.completed_at ||
        existingActivityProgress?.completed_at ||
        now
    }

    let saveError = null

    if (currentRow) {
      const { error } = await supabase
        .from('activity_progress')
        .update(payload)
        .eq('user_id', userId)
        .eq('lesson_id', lessonId)
        .eq('activity_id', activityId)

      saveError = error
    } else {
      const { error } = await supabase
        .from('activity_progress')
        .insert(payload)

      saveError = error
    }

    if (saveError) {
      console.warn(
        'PulmoLearn activity tracker: activity_progress save failed:',
        saveError.message
      )
      return
    }

    existingActivityProgress = {
      ...(existingActivityProgress || {}),
      ...payload
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: activity_progress save error:',
      error
    )
  }
}

async function sendLtiCompletionPassback() {
  if (
    !isLtiLaunch ||
    !session?.access_token ||
    !lessonId ||
    !knownCompleted
  ) {
    return
  }

  if (
    ltiPassbackKey &&
    sessionStorage.getItem(ltiPassbackKey) === 'sent'
  ) {
    return
  }

  try {
    const response = await fetch('/api/lti/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token: session.access_token,
        lesson_id: lessonId,
        completed: true
      })
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok || !result?.ok || !result?.passed_back) {
      console.warn(
        'PulmoLearn activity tracker: Canvas completion passback failed:',
        result?.error || `HTTP ${response.status}`,
        result
      )
      return
    }

    if (ltiPassbackKey) {
      sessionStorage.setItem(ltiPassbackKey, 'sent')
    }

    console.log(
      `PulmoLearn activity tracker: Canvas completion confirmed — ${lessonId}`
    )
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: Canvas passback error:',
      error
    )
  }
}

async function saveNow(reason = 'sync') {
  if (!initializationComplete) return

  if (saveInFlight) {
    saveQueued = true
    return
  }

  const { percent, completed } = currentState()

  const signature = [
    percent,
    completed ? 1 : 0,
    explicitAttempts ?? ''
  ].join('|')

  // Heartbeats still save time, but DOM-triggered duplicate saves are skipped.
  if (reason !== 'heartbeat' && signature === lastSavedSignature) {
    if (completed) {
      await sendLtiCompletionPassback()
    }
    return
  }

  lastSavedSignature = signature

  if (!serverSyncEnabled || !userId || !lessonId) {
    if (!session) {
      console.warn(
        'PulmoLearn activity tracker: progress detected locally, but no authenticated PulmoLearn session is available for server sync.'
      )
    }
    return
  }

  saveInFlight = true

  try {
    const now = new Date().toISOString()
    const deltaSeconds = getSessionDeltaSeconds()

    await Promise.allSettled([
      saveLegacyProgress(percent, completed, now),
      saveLessonProgress(percent, completed, now, deltaSeconds),
      saveActivityProgress(completed, now, deltaSeconds, percent)
    ])

    console.log(
      `PulmoLearn activity tracker: saved ${lessonId} — ${percent}% completed=${completed}`
    )

    if (completed) {
      await sendLtiCompletionPassback()
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: save cycle failed safely:',
      error
    )
  } finally {
    saveInFlight = false

    if (saveQueued) {
      saveQueued = false
      scheduleSave('queued')
    }
  }
}

function scheduleSave(reason = 'change') {
  if (!initializationComplete) return

  clearTimeout(saveTimer)
  saveTimer = setTimeout(
    () => saveNow(reason),
    SAVE_DEBOUNCE_MS
  )
}

function reportProgress(detail = {}) {
  if (
    Object.prototype.hasOwnProperty.call(detail, 'percent')
  ) {
    const percent = clampPercent(detail.percent)
    if (percent !== null) {
      explicitPercent = Math.max(
        explicitPercent ?? 0,
        percent
      )
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(detail, 'completed')
  ) {
    explicitCompleted =
      Boolean(explicitCompleted) ||
      Boolean(detail.completed)
  }

  if (
    Object.prototype.hasOwnProperty.call(detail, 'attempts')
  ) {
    const attempts = Number(detail.attempts)

    if (Number.isFinite(attempts) && attempts >= 0) {
      explicitAttempts = Math.max(
        explicitAttempts ?? 0,
        Math.round(attempts)
      )
    }
  }

  const state = currentState()

  if (state.completed) {
    explicitCompleted = true
    explicitPercent = 100
  }

  scheduleSave('explicit-report')
  return state
}

window.PulmoActivityProgress = {
  report: reportProgress,
  sync: () => saveNow('manual-sync'),
  getState: () => ({
    ...currentState(),
    lessonId,
    courseId,
    activityId,
    activityName,
    activityType,
    isLtiLaunch,
    serverSyncEnabled
  })
}

window.addEventListener(
  'pulmolearn:activity-progress',
  event => {
    reportProgress(event.detail || {})
  }
)

async function initialize() {
  if (!lessonId) {
    console.warn(
      'PulmoLearn activity tracker: no lesson ID found. Set window.PULMO_LESSON_ID, window.LESSON_ID, or window.PULMO_LESSON.lessonId.'
    )
  }

  try {
    const {
      data: { session: currentSession },
      error
    } = await supabase.auth.getSession()

    if (error) {
      console.warn(
        'PulmoLearn activity tracker: session lookup failed:',
        error.message
      )
    }

    session = currentSession || null
    userId = session?.user?.id || null
    serverSyncEnabled = Boolean(userId && lessonId)

    if (session) {
      await loadExistingServerState()
    } else {
      console.warn(
        'PulmoLearn activity tracker: no authenticated session. The activity remains fully usable; server tracking will be skipped for this visit.'
      )
    }
  } catch (error) {
    console.warn(
      'PulmoLearn activity tracker: initialization auth error:',
      error
    )
  }

  // Let the activity restore its own localStorage state and progress bar first.
  await new Promise(resolve =>
    setTimeout(resolve, INITIAL_SYNC_DELAY_MS)
  )

  initializationComplete = true

  const initial = currentState()

  console.log(
    `PulmoLearn activity tracker: ready — ${lessonId || 'unknown'} ${initial.percent}% completed=${initial.completed}`
  )

  // Create/update the admin record even at 0%, so a visit can be seen.
  await saveNow('initial')

  const observer = new MutationObserver(() => {
    const beforePercent = knownPercent
    const beforeCompleted = knownCompleted
    const after = currentState()

    if (
      after.percent !== beforePercent ||
      after.completed !== beforeCompleted
    ) {
      scheduleSave('dom-progress')
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
      'data-complete',
      'data-progress-percent',
      'data-activity-complete'
    ]
  })

  // Helpful for activities that update state without mutating the standard
  // progress elements immediately.
  document.addEventListener('change', () => {
    scheduleSave('change-event')
  }, true)

  document.addEventListener('click', () => {
    setTimeout(() => {
      const beforePercent = knownPercent
      const beforeCompleted = knownCompleted
      const after = currentState()

      if (
        after.percent !== beforePercent ||
        after.completed !== beforeCompleted
      ) {
        scheduleSave('click-progress')
      }
    }, 50)
  }, true)

  // Periodic heartbeat records active time and catches silent state changes.
  setInterval(() => {
    currentState()
    saveNow('heartbeat')
  }, HEARTBEAT_MS)

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveNow('visibility-hidden')
    } else {
      scheduleSave('visibility-visible')
    }
  })

  window.addEventListener('pagehide', () => {
    saveNow('pagehide')
  })
}

initialize().catch(error => {
  // Tracking must never be allowed to break the learning activity.
  console.warn(
    'PulmoLearn activity tracker: disabled after a safe initialization failure:',
    error
  )
})
