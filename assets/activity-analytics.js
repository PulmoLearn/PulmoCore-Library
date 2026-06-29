import { supabase } from '/assets/auth.js'

let analyticsConfig = null
const activityState = new Map()

function getActivityElement(el) {
  return el.closest('[data-activity-id], .require-complete, .quiz-card, .case-card, .hotspot-card, .knowledge-check, section')
}

function getActivityId(activityEl) {
  if (!activityEl) return 'unknown_activity'
  return (
    activityEl.dataset.activityId ||
    activityEl.id ||
    activityEl.dataset.activityName ||
    activityEl.querySelector('h2,h3,h4')?.textContent?.trim()?.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') ||
    'unknown_activity'
  )
}

function getActivityName(activityEl) {
  if (!activityEl) return 'Unknown Activity'
  return (
    activityEl.dataset.activityName ||
    activityEl.querySelector('h2,h3,h4')?.textContent?.trim() ||
    activityEl.id ||
    'Unknown Activity'
  )
}

function getActivityType(clickedEl, activityEl) {
  if (clickedEl.closest('.quiz-option')) return 'quiz'
  if (clickedEl.closest('.knowledge-option')) return 'knowledge_check'
  if (clickedEl.closest('.case-option')) return 'guided_case'
  if (clickedEl.closest('.hotspot-btn')) return 'hotspot'
  if (clickedEl.closest('video')) return 'video'
  return activityEl?.dataset.activityType || 'interactive'
}

function isCorrect(clickedEl) {
  const button = clickedEl.closest('button, [role="button"], .quiz-option, .knowledge-option, .case-option, .hotspot-btn')
  if (!button) return false
  return button.dataset.correct === 'true' || button.classList.contains('correct') || button.classList.contains('visited')
}

async function upsertActivity(activityId, activityName, activityType, completed = false) {
  if (!analyticsConfig?.userId || !analyticsConfig?.lessonId) return

  const state = activityState.get(activityId)
  if (!state) return

  const now = new Date().toISOString()
  const timeSeconds = Math.max(1, Math.floor((Date.now() - state.startedAt) / 1000))

  const payload = {
    user_id: analyticsConfig.userId,
    course_id: analyticsConfig.courseId || 'unknown',
    lesson_id: analyticsConfig.lessonId,
    activity_id: activityId,
    activity_name: activityName,
    activity_type: activityType,
    attempts: state.attempts,
    completed,
    time_seconds: timeSeconds,
    updated_at: now,
    ...(completed ? { completed_at: now } : {})
  }

  const { error } = await supabase
    .from('activity_progress')
    .upsert(payload, {
      onConflict: 'user_id,lesson_id,activity_id'
    })

  if (error) {
    console.error('PulmoLearn activity tracking failed:', error.message)
  } else {
    console.log(`PulmoLearn activity saved: ${activityId} · attempts=${state.attempts} · time=${timeSeconds}s · completed=${completed}`)
  }
}

export function initializeActivityAnalytics(config) {
  analyticsConfig = config

  document.addEventListener('click', async (event) => {
    const clicked = event.target.closest('.quiz-option, .knowledge-option, .case-option, .hotspot-btn')
    if (!clicked) return

    const activityEl = getActivityElement(clicked)
    const activityId = getActivityId(activityEl)
    const activityName = getActivityName(activityEl)
    const activityType = getActivityType(clicked, activityEl)

    if (!activityState.has(activityId)) {
      activityState.set(activityId, {
        startedAt: Date.now(),
        attempts: 0
      })
    }

    const state = activityState.get(activityId)
    state.attempts += 1

    const completed = isCorrect(clicked)

    await upsertActivity(activityId, activityName, activityType, completed)
  })

  document.addEventListener('activityComplete', async (event) => {
    const activityEl = event.target instanceof Element ? getActivityElement(event.target) : null
    const activityId = activityEl ? getActivityId(activityEl) : event.detail?.activityId || 'completed_activity'
    const activityName = activityEl ? getActivityName(activityEl) : event.detail?.activityName || 'Completed Activity'
    const activityType = activityEl ? getActivityType(activityEl, activityEl) : event.detail?.activityType || 'interactive'

    if (!activityState.has(activityId)) {
      activityState.set(activityId, {
        startedAt: Date.now(),
        attempts: 1
      })
    }

    await upsertActivity(activityId, activityName, activityType, true)
  })
}
