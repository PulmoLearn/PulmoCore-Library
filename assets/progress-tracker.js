/**
 * PulmoLearn Progress Tracker v8.2
 */

import { supabase } from '/assets/auth.js'
import { initializeActivityAnalytics } from '/assets/activity-analytics.js'

console.log('PulmoLearn: progress-tracker.js v8.2 loaded')

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
  setTimeout(() => banner.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
}

function showResumeBanner(percent, sectionsRevealed, allSections) {
  const banner = document.createElement('div')
  banner.className = 'pl-resume-banner'
  banner.innerHTML = `
    <span style="color:#1CA7A8;">↩</span>
    <span>Resumed at ${percent}% — scroll up to review earlier sections</span>
    <button onclick="this.closest('.pl-resume-banner').remove()" style="
      background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2);
      border-radius:8px; color:#fff; padding:4px 10px; cursor:pointer; font-size:.85rem;
    ">✕</button>
  `
  document.body.appendChild(banner)

  const lastVisible = allSections[sectionsRevealed - 1]
  if (lastVisible) {

  setTimeout(() => {
    if (banner.parentNode) banner.remove()
  }, 6000)
}

// ── Reset progress ──
async function resetProgress() {
  console.log(`PulmoLearn: Resetting progress for "${lessonId}"`)

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

  if (completed) showCompletionBanner()
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

// ── Init ──
window.addEventListener('load', async () => {
  console.log('PulmoLearn: load event fired')

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

  if (new URLSearchParams(window.location.search).get('review') === 'true') {
    setTimeout(() => {
      document.querySelectorAll('.quiz-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) btn.click()
      })

      document.querySelectorAll('.knowledge-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) btn.click()
      })

      document.querySelectorAll('.case-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) btn.click()
      })

      document.querySelectorAll('.sort-row').forEach(row => {
        const select = row.querySelector('select')
        if (select && row.dataset.answer) select.value = row.dataset.answer
      })

      document.querySelectorAll('[id^="check"]').forEach(btn => {
        if (btn.tagName === 'BUTTON') btn.click()
      })

      document.querySelectorAll('.hotspot-btn').forEach(btn => btn.click())
    }, 500)
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
    } else {
      await restoreProgress()
    }

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
