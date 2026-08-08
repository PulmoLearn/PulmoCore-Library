/**
 * PulmoLearn Progress Tracker v8.3
 */

import { supabase } from '/assets/auth.js'
import { initializeActivityAnalytics } from '/assets/activity-analytics.js'

console.log('PulmoLearn: progress-tracker.js v8.3 loaded')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const urlParams = new URLSearchParams(window.location.search)
const isLtiLaunch = urlParams.get('lti') === '1'

if (isLtiLaunch) {
  console.log('LTI launch detected — bypassing normal PulmoLearn login for test.')
  window.PULMO_LTI_MODE = true
}

const { data: { session } } = await supabase.auth.getSession()

if (!session && !isLtiLaunch) {
  window.location.href = '/login.html'
  throw new Error('Not authenticated')
}

const userId = session?.user?.id || `lti-test-${Date.now()}`
const lessonId = window.PULMO_LESSON_ID || window.LESSON_ID
const lessonMeta = window.PULMO_LESSON || {}

// ── Canvas LTI completion passback ──
const ltiPassbackKey = `pulmolearn-lti-passback:${userId}:${lessonId}`
let ltiPassbackInFlight = false

async function sendLtiCompletionPassback() {
  if (!isLtiLaunch || !session?.access_token || !lessonId) return

  if (sessionStorage.getItem(ltiPassbackKey) === 'sent') {
    return
  }

  if (ltiPassbackInFlight) return
  ltiPassbackInFlight = true

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
      console.error(
        'PulmoLearn: Canvas completion passback failed:',
        result?.error || `HTTP ${response.status}`,
        result
      )
      return
    }

    sessionStorage.setItem(ltiPassbackKey, 'sent')
    console.log(`PulmoLearn: Canvas completion passback confirmed — ${lessonId}`)
  } catch (error) {
    console.error('PulmoLearn: Canvas completion passback error:', error)
  } finally {
    ltiPassbackInFlight = false
  }
}

// ── Saved answer state ──
const answerStateKey = `pulmolearn-answer-state:${userId}:${lessonId}`

function getSavedAnswerState() {
  try {
    return JSON.parse(localStorage.getItem(answerStateKey)) || {}
  } catch (error) {
    console.warn('PulmoLearn: Could not read saved answer state.', error)
    return {}
  }
}

function saveAnswerState() {
  if (!lessonId || !userId) return

  const state = {
    activities: {}
  }

  document.querySelectorAll('[data-activity-id]').forEach(activity => {
    const activityId = activity.dataset.activityId
    if (!activityId) return

    const activityState = {
      complete: activity.dataset.complete === 'true',
      correctButtons: [],
      selects: {},
      inputs: {}
    }

    activity.querySelectorAll('.quiz-option.correct-choice').forEach(button => {
      activityState.correctButtons.push(button.textContent.trim())
    })

    activity.querySelectorAll('select').forEach((select, index) => {
      if (select.value) {
        const key = select.id || select.name || `select-${index}`
        activityState.selects[key] = select.value
      }
    })

    activity.querySelectorAll('input').forEach((input, index) => {
      if (input.value !== '') {
        const key = input.id || input.name || `input-${index}`
        activityState.inputs[key] = input.value
      }

      if (input.type === 'checkbox' || input.type === 'radio') {
        const key = input.id || input.name || `input-${index}`
        activityState.inputs[key] = input.checked
      }
    })

    const hasSavedWork =
      activityState.complete ||
      activityState.correctButtons.length > 0 ||
      Object.keys(activityState.selects).length > 0 ||
      Object.keys(activityState.inputs).length > 0

    if (hasSavedWork) {
      state.activities[activityId] = activityState
    }
  })

  localStorage.setItem(answerStateKey, JSON.stringify(state))
}

function restoreAnswerState() {
  const saved = getSavedAnswerState()

  if (!saved.activities) return

  Object.entries(saved.activities).forEach(([activityId, activityState]) => {
    const activity = document.querySelector(
      `[data-activity-id="${CSS.escape(activityId)}"]`
    )

    if (!activity) return

    // Restore correct selected buttons.
    if (Array.isArray(activityState.correctButtons)) {
      activityState.correctButtons.forEach(savedText => {
        const matchingButton = Array.from(
          activity.querySelectorAll('.quiz-option')
        ).find(button => button.textContent.trim() === savedText)

        if (!matchingButton) return

        matchingButton.classList.add('correct-choice')

        const question =
          matchingButton.closest('.knowledge-question') ||
          matchingButton.closest('.case-stage') ||
          matchingButton.closest('.quiz-card')

        if (question) {
          question.dataset.correctAnswered = 'true'

          question.querySelectorAll('.quiz-option').forEach(button => {
            button.disabled = true
          })

          const feedback = question.querySelector('.quiz-feedback')

          if (feedback && matchingButton.dataset.feedback) {
            feedback.classList.add('show')
            feedback.style.background = 'var(--airway-mint)'
            feedback.innerHTML =
              matchingButton.dataset.feedback +
              '<br><br><strong>Previously completed.</strong>'
          }
        }
      })
    }

    // Restore dropdown values.
    Object.entries(activityState.selects || {}).forEach(([key, value]) => {
      let select = document.getElementById(key)

      if (!select && key.startsWith('select-')) {
        const index = Number(key.replace('select-', ''))
        select = activity.querySelectorAll('select')[index]
      }

      if (select) {
        select.value = value

        const row = select.closest('.sort-row')
        if (row && select.value === row.dataset.answer) {
          row.classList.add('correct')
          row.classList.remove('incorrect')
        }
      }
    })

    // Restore input and checkbox values.
    Object.entries(activityState.inputs || {}).forEach(([key, value]) => {
      let input = document.getElementById(key)

      if (!input && key.startsWith('input-')) {
        const index = Number(key.replace('input-', ''))
        input = activity.querySelectorAll('input')[index]
      }

      if (!input) return

      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = Boolean(value)
      } else {
        input.value = value
      }
    })

    // ADD THE MULTISELECT RESTORATION HERE.
    activity.querySelectorAll('.check-row').forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]')
      if (!checkbox) return

      const shouldBeChecked = row.dataset.answer === 'true'
      const isCorrect = checkbox.checked === shouldBeChecked

      row.classList.toggle('correct', isCorrect)
      row.classList.remove('incorrect')
    })

    // Keep this after the multiselect restoration.
    if (activityState.complete) {
      activity.dataset.complete = 'true'

      const status = activity.querySelector('.activity-status')
      if (status) {
        status.textContent = 'Previously completed.'
        status.classList.add('complete')
      }
    }
  })

  document.dispatchEvent(new CustomEvent('progressRestored'))
}

initializeActivityAnalytics({
  userId,
  lessonId,
  courseId: lessonMeta.courseId || 'unknown'
})

console.log(`PulmoLearn: lessonId="${lessonId}" userId="${userId}"`)

if (!lessonId) {
  console.error('PulmoLearn: window.LESSON_ID is not set on this lesson page.')
}

// ── Timing ──
const sessionStartTime = Date.now()
let lastSavedElapsedSeconds = 0

function getSessionDeltaSeconds() {
  const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000)
  const delta = Math.max(0, elapsed - lastSavedElapsedSeconds)
  lastSavedElapsedSeconds = elapsed
  return delta
}

// ── Inject shared styles ──
const style = document.createElement('style')
style.textContent = `
  @keyframes plSlideUp {
    from { opacity:0; transform:translateX(-50%) translateY(16px); }
    to   { opacity:1; transform:translateX(-50%) translateY(0); }
  }
  @keyframes plFadeIn {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .pl-complete-banner {
    background: linear-gradient(135deg, #0B1F33 0%, #102A43 100%);
    border: 2px solid rgba(28,167,168,0.5);
    border-radius: 22px;
    padding: 36px 32px;
    margin: 32px 0 8px;
    text-align: center;
    animation: plFadeIn .5s ease;
    position: relative;
    overflow: hidden;
  }
  .pl-complete-banner::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 0%, rgba(28,167,168,0.15), transparent 70%);
    pointer-events: none;
  }
  .pl-complete-icon {
    width: 72px; height: 72px;
    background: rgba(28,167,168,0.15);
    border: 2px solid rgba(28,167,168,0.4);
    border-radius: 50%;
    display: grid; place-items: center;
    font-size: 2rem;
    margin: 0 auto 18px;
  }
  .pl-complete-title {
    font-family: "Montserrat", Arial, sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: #fff;
    margin-bottom: 10px;
  }
  .pl-complete-title span { color: #1CA7A8; }
  .pl-complete-sub {
    color: rgba(255,255,255,0.65);
    font-size: .98rem;
    margin-bottom: 28px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
  }
  .pl-educational-disclaimer {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.14);
    border-left: 4px solid #F4B860;
    border-radius: 14px;
    padding: 14px 16px;
    margin: 0 auto 26px;
    max-width: 760px;
    text-align: left;
    color: rgba(255,255,255,0.72);
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
    font-size: .86rem;
    line-height: 1.5;
  }
  .pl-educational-disclaimer strong {
    display: block;
    color: #fff;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: .9rem;
    margin-bottom: 5px;
    letter-spacing: -0.02em;
  }
  .pl-educational-disclaimer a {
    color: #DDF7F2;
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .pl-complete-actions {
    display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
  }
  .pl-btn-home {
    background: #1CA7A8; color: #fff;
    border: none; border-radius: 12px;
    padding: 14px 28px; font-size: 1rem; font-weight: 800;
    cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px;
    transition: background .18s, transform .18s;
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
  }
  .pl-btn-home:hover { background: #128486; transform: translateY(-1px); }
  .pl-btn-glossary {
    background: rgba(255,255,255,0.08);
    color: #fff; border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px; padding: 14px 28px;
    font-size: 1rem; font-weight: 800;
    cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px;
    transition: background .18s;
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
  }
  .pl-btn-glossary:hover { background: rgba(255,255,255,0.14); }
  .pl-complete-stats {
    display: flex; justify-content: center; gap: 32px;
    margin-bottom: 28px; flex-wrap: wrap;
  }
  .pl-stat { text-align: center; }
  .pl-stat strong {
    display: block;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 1.6rem; font-weight: 800;
    letter-spacing: -0.04em; color: #fff;
  }
  .pl-stat span {
    font-size: .78rem; color: rgba(255,255,255,0.5);
    font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
  }
  .pl-resume-banner {
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    background: #0B1F33; color: #fff;
    border: 1px solid rgba(28,167,168,0.4);
    border-radius: 14px; padding: 14px 22px;
    display: flex; align-items: center; gap: 14px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
    z-index: 999;
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
    font-size: .95rem; font-weight: 700; white-space: nowrap;
    animation: plSlideUp .3s ease;
  }
`
document.head.appendChild(style)

// ── Progress calculations ──
function getAllSections() {
  return document.querySelectorAll('.lesson-stack-top > section, .lesson-stack > section')
}

function calculateProgress() {
  const allSections = getAllSections()
  const total = allSections.length
  if (!total) return 0

  const visible = Array.from(allSections).filter(
    section => !section.classList.contains('lesson-hidden')
  ).length

  const percent = Math.round((visible / total) * 100)
  console.log(`PulmoLearn: calculateProgress — ${visible} visible / ${total} total = ${percent}%`)
  return percent
}

function isLessonComplete() {
  const allSections = getAllSections()
  if (!allSections.length) return false
  return !allSections[allSections.length - 1].classList.contains('lesson-hidden')
}

// ── Completion banner ──
let completionShown = false

function showCompletionBanner() {
  if (completionShown) return
  completionShown = true

  const lessonStack = document.querySelector('.lesson-stack')
  if (!lessonStack) return

  const totalSections = getAllSections().length

  const banner = document.createElement('div')
  banner.className = 'pl-complete-banner'
  banner.innerHTML = `
    <div class="pl-complete-icon">✓</div>
    <div class="pl-complete-title">Lesson <span>Complete</span></div>
    <p class="pl-complete-sub">
      You've worked through all ${totalSections} sections of this module.
      Your progress has been saved — return to your dashboard to continue with the next lesson.
    </p>
    <div class="pl-educational-disclaimer">
      <strong>Educational disclaimer</strong>
      PulmoLearn content is provided for educational purposes only and is intended to support respiratory therapy learning and professional development. It is not intended to replace clinical judgment, institutional policies, manufacturer instructions for use, physician orders, or professional medical advice. Always follow your organization's policies and consult appropriate clinical resources when making patient care decisions.
      <br><a href="/disclaimer.html">Read full disclaimer</a>
    </div>
    <div class="pl-complete-stats">
      <div class="pl-stat">
        <strong>${totalSections}</strong>
        <span>Sections completed</span>
      </div>
      <div class="pl-stat">
        <strong>100%</strong>
        <span>Module progress</span>
      </div>
      <div class="pl-stat">
        <strong>✓</strong>
        <span>Progress saved</span>
      </div>
    </div>
    <div class="pl-complete-actions">
      <a href="/dashboard.html" class="pl-btn-home">← Back to Dashboard</a>
      <a href="/glossary.html" class="pl-btn-glossary">📖 Full Glossary</a>
      <a href="/disclaimer.html" class="pl-btn-glossary">⚕ Educational Disclaimer</a>
    </div>
  `

  lessonStack.appendChild(banner)
}

function showResumeBanner(percent, sectionsRevealed, allSections) {
  const banner = document.createElement('div')
  banner.className = 'pl-resume-banner'
  banner.innerHTML = `
    <span style="color:#1CA7A8;">↩</span>
    <span>Progress restored to ${percent}% — scroll down to continue where you left off</span>
    <button onclick="this.closest('.pl-resume-banner').remove()" style="
      background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2);
      border-radius:8px; color:#fff; padding:4px 10px; cursor:pointer; font-size:.85rem;
    ">✕</button>
  `
  document.body.appendChild(banner)

  setTimeout(() => {
    if (banner.parentNode) banner.remove()
  }, 6000)
}

// ── Reset progress ──
async function resetProgress() {
  console.log(`PulmoLearn: Resetting progress for "${lessonId}"`)

  sessionStorage.removeItem(ltiPassbackKey)
  ltiPassbackInFlight = false

  const now = new Date().toISOString()
  const lessonMeta = window.PULMO_LESSON || {}

  await supabase.from('progress').upsert({
    user_id: userId,
    lesson_id: lessonId,
    percent: 0,
    completed: false,
    updated_at: now
  }, { onConflict: 'user_id,lesson_id' })

  await supabase.from('lesson_progress').upsert({
    user_id: userId,
    lesson_id: lessonId,
    course_id: lessonMeta.courseId || 'unknown',
    lesson_title: lessonMeta.lessonTitle || document.title,
    percent_complete: 0,
    completed: false,
    total_seconds: 0,
    last_visited_at: now,
    completed_at: null,
    updated_at: now
  }, { onConflict: 'user_id,lesson_id' })

  const url = new URL(window.location.href)
  url.searchParams.delete('restart')
  window.history.replaceState({}, '', url)

  console.log(`PulmoLearn: Progress reset complete for "${lessonId}"`)
}

// ── Save progress ──
let saveTimer = null
let observerPaused = true

function scheduleSave() {
  if (observerPaused) return
  clearTimeout(saveTimer)
  saveTimer = setTimeout(saveProgress, 600)
}

async function getCurrentTotalSeconds() {
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('total_seconds')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  if (error || !data) return 0
  return Number(data.total_seconds || 0)
}

async function saveProgress() {
  if (!lessonId || !userId) return

  const percent = calculateProgress()
  const completed = isLessonComplete()
  const now = new Date().toISOString()
  const lessonMeta = window.PULMO_LESSON || {}
  const deltaSeconds = getSessionDeltaSeconds()

  console.log(`PulmoLearn: Saving — ${lessonId} ${percent}% completed=${completed}`)

  const { error } = await supabase.from('progress').upsert({
    user_id: userId,
    lesson_id: lessonId,
    percent,
    completed,
    updated_at: now,
    ...(completed ? { completed_at: now } : {})
  }, { onConflict: 'user_id,lesson_id' })

  if (error) {
    console.error('PulmoLearn: Failed to save progress:', error.message)
    return
  }

  console.log(`PulmoLearn: Save confirmed — ${lessonId} ${percent}%`)

  const existingSeconds = await getCurrentTotalSeconds()
  const updatedTotalSeconds = existingSeconds + deltaSeconds

  const progressPayload = {
    user_id: userId,
    lesson_id: lessonId,
    course_id: lessonMeta.courseId || 'unknown',
    lesson_title: lessonMeta.lessonTitle || document.title,
    percent_complete: percent,
    completed,
    total_seconds: updatedTotalSeconds,
    last_visited_at: now,
    updated_at: now,
    ...(completed ? { completed_at: now } : {})
  }

  const { error: lessonProgressError } = await supabase
    .from('lesson_progress')
    .upsert(progressPayload, {
      onConflict: 'user_id,lesson_id'
    })

  if (lessonProgressError) {
    console.error('PulmoLearn: lesson_progress save failed:', lessonProgressError.message)
  } else {
    console.log(`PulmoLearn: lesson_progress save confirmed — ${lessonId} ${percent}% · ${updatedTotalSeconds}s total`)
  }

  if (typeof window.saveCourseProgress === 'function') {
    const fileName = window.location.pathname.split('/').pop()
    window.saveCourseProgress(fileName, percent, completed)
  }

  if (completed) {
    showCompletionBanner()
    await sendLtiCompletionPassback()
  }
}

// ── Restore progress ──
async function restoreProgress() {
  if (!lessonId || !userId) return

  console.log(`PulmoLearn: Checking for saved progress for "${lessonId}"`)

  const { data, error } = await supabase
    .from('progress')
    .select('percent, completed')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  if (error || !data || data.percent < 10) {
    console.log('PulmoLearn: No meaningful progress to restore — starting fresh')
    return
  }

  const allSections = getAllSections()
  const total = allSections.length

  if (!total) return

  const sectionsToReveal = Math.round((data.percent / 100) * total)
  if (sectionsToReveal <= 1) return

  allSections.forEach((section, index) => {
    if (index < sectionsToReveal) section.classList.remove('lesson-hidden')
  })

  allSections.forEach((section, index) => {
    if (index < sectionsToReveal - 1) {
      const btn = section.querySelector('.section-continue')
      if (btn) btn.remove()
    }
  })

  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('progressRestored'))
  }, 200)

  if (typeof window.saveCourseProgress === 'function') {
    const fileName = window.location.pathname.split('/').pop()
    window.saveCourseProgress(fileName, data.percent, data.completed)
  }

  if (data.completed) {
    completionShown = false
    setTimeout(showCompletionBanner, 600)
  } else {
    showResumeBanner(data.percent, sectionsToReveal, allSections)
  }

  console.log(`PulmoLearn: Restore complete — ${lessonId} at ${data.percent}%`)
}

// ── Lesson init helpers ──
function callInit(name) {
  if (typeof window[name] === 'function') {
    try {
      window[name]()
    } catch (e) {
      console.warn(`PulmoLearn: ${name} threw an error:`, e.message)
    }
  }
}

// ── Shared image protection ──
function initializeImageProtection() {
  if (document.documentElement.dataset.imageProtectionReady === 'true') return

  document.documentElement.dataset.imageProtectionReady = 'true'

  function protectImage(image) {
    if (!(image instanceof HTMLImageElement)) return

    image.draggable = false
    image.style.webkitUserDrag = 'none'
    image.style.userSelect = 'none'
  }

  document.querySelectorAll('img').forEach(protectImage)

  document.addEventListener('contextmenu', event => {
    const image = event.target.closest?.('img')

    if (image) {
      event.preventDefault()
    }
  })

  document.addEventListener('dragstart', event => {
    const image = event.target.closest?.('img')

    if (image) {
      event.preventDefault()
    }
  })

  const imageObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node instanceof HTMLImageElement) {
          protectImage(node)
        } else if (node instanceof HTMLElement) {
          node.querySelectorAll('img').forEach(protectImage)
        }
      })
    })
  })

  imageObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// ── Observer ──
const observer = new MutationObserver((mutations) => {
  if (observerPaused) return

  for (const mutation of mutations) {
    if (
      mutation.type === 'attributes' &&
      mutation.attributeName === 'class' &&
      mutation.target.closest('.lesson-stack')
    ) {
      scheduleSave()
      break
    }
  }
})

observer.observe(document.body, {
  attributes: true,
  subtree: true,
  attributeFilter: ['class']
})

document.addEventListener('activityComplete', scheduleSave)

document.addEventListener('activityComplete', () => {
  setTimeout(saveAnswerState, 50)
})

document.addEventListener('click', event => {
  if (
    event.target.closest('.quiz-option') ||
    event.target.closest('[id^="check"]') ||
    event.target.closest('[id^="calc"]')
  ) {
    setTimeout(saveAnswerState, 100)
  }
})

document.addEventListener('change', event => {
  if (event.target.matches('select, input')) {
    setTimeout(saveAnswerState, 100)
  }
})

// ── Init ──
window.addEventListener('load', async () => {
  console.log('PulmoLearn: load event fired')

  initializeImageProtection()

  callInit('initializeProgressiveSections')
  callInit('initializePrecheck')
  callInit('initializeHotspotActivity')
  callInit('initializeRiskSort')
  callInit('initializeManifestationsSort')
  callInit('initializeSequenceSort')
  callInit('initializeKnowledgeCheck')
  callInit('initializeGuidedCase')
  callInit('initializePeakFlowActivity')
  callInit('shuffleAnswerOptions')
  callInit('enableDynamicReorder')

  if (typeof shuffleSequence === 'function') {
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
  }

  document.querySelectorAll('a[href*="dashboard"]').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault()
      await saveProgress()
      window.location.href = link.href
    })
  })

  setTimeout(async () => {
    const isRestart = new URLSearchParams(window.location.search).get('restart') === 'true'

    if (isRestart) {
      await resetProgress()
      localStorage.removeItem(answerStateKey)
    } else {
      await restoreProgress()
      restoreAnswerState()
    }

    window.scrollTo(0, 0)

    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 150)

    observerPaused = false

    console.log('PulmoLearn: Observer enabled')
    console.log('PulmoLearn: Ready — waiting for user interaction to save')

    await saveProgress()

    setInterval(() => {
      saveProgress()
    }, 30000)
  }, 3500)
})

// ── Save on tab close ──
window.addEventListener('pagehide', () => {
  saveProgress()
})

console.log(`PulmoLearn: Setup complete for "${lessonId}"`)