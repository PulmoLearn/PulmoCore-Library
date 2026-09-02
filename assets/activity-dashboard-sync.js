/**
 * PulmoLearn Activity Dashboard Sync v1.0
 *
 * Reads true activity percentage from window.PulmoActivityProgress
 * and stores a dashboard-safe activity record keyed by the activity filename.
 * It does not alter Canvas passback, lesson_progress, activity analytics,
 * or the activity's own local persistence.
 */

import { supabase } from '/assets/auth.js'

console.log('PulmoLearn: activity-dashboard-sync.js v1.0 loaded')

const activityKey =
  String(
    decodeURIComponent(
      window.location.pathname.split('/').pop() || ''
    )
  )
    .replace(/\.html$/i, '')
    .trim()
    .toLowerCase()

let lastSignature = ''
let session = null
let userId = null

async function saveDashboardProgress() {
  if (!activityKey || !window.PulmoActivityProgress) return

  const state = window.PulmoActivityProgress.getState?.()
  if (!state) return

  const percent = Math.max(
    0,
    Math.min(100, Math.round(Number(state.percent || 0)))
  )
  const completed = Boolean(state.completed) || percent >= 100
  const signature = `${percent}|${completed ? 1 : 0}`

  if (signature === lastSignature) return
  lastSignature = signature

  if (!session || !userId) {
    const result = await supabase.auth.getSession()
    session = result.data?.session || null
    userId = session?.user?.id || null
  }

  if (!userId) return

  const meta = window.PULMO_LESSON || {}
  const now = new Date().toISOString()

  const payload = {
    user_id: userId,
    activity_key: activityKey,
    lesson_id:
      state.lessonId ||
      window.PULMO_LESSON_ID ||
      window.LESSON_ID ||
      null,
    course_id:
      state.courseId ||
      meta.courseId ||
      meta.course_id ||
      'unknown',
    activity_name:
      meta.activityName ||
      meta.activity_name ||
      meta.lessonTitle ||
      meta.lesson_title ||
      document.title ||
      activityKey,
    percent_complete: percent,
    completed,
    updated_at: now
  }

  if (completed) {
    payload.completed_at = now
  }

  const { error } = await supabase
    .from('activity_dashboard_progress')
    .upsert(payload, {
      onConflict: 'user_id,activity_key'
    })

  if (error) {
    console.warn(
      'PulmoLearn: activity dashboard sync failed:',
      error.message
    )
  }
}

async function init() {
  const result = await supabase.auth.getSession()
  session = result.data?.session || null
  userId = session?.user?.id || null

  // The activity tracker initializes asynchronously.
  // Wait briefly, then use its public getState() API.
  for (let i = 0; i < 20; i++) {
    if (window.PulmoActivityProgress) break
    await new Promise(resolve => setTimeout(resolve, 150))
  }

  await saveDashboardProgress()

  window.addEventListener(
    'pulmolearn:activity-progress-report',
    () => setTimeout(saveDashboardProgress, 350)
  )

  window.addEventListener(
    'pulmolearn:progress',
    () => setTimeout(saveDashboardProgress, 350)
  )

  window.addEventListener(
    'pulmolearn:complete',
    () => setTimeout(saveDashboardProgress, 350)
  )

  // Safe fallback for activities whose UI changes are detected by
  // activity-progress-tracker's own visible-progress poll.
  setInterval(saveDashboardProgress, 2000)
}

init().catch(error => {
  console.warn(
    'PulmoLearn: activity dashboard sync disabled safely:',
    error
  )
})
