/**
 * PulmoLearn Progress Tracker v7
 * Add to every lesson page just before </body>:
 *   <script>window.LESSON_ID = 'als'</script>
 *   <script type="module" src="/assets/progress-tracker.js"></script>
 */

import { supabase } from '/assets/auth.js'

console.log('PulmoLearn: progress-tracker.js v7 loaded')

// ── Auth check ──
const { data: { session } } = await supabase.auth.getSession()
if (!session) {
  window.location.href = '/login.html'
  throw new Error('Not authenticated')
}

const userId = session.user.id
const lessonId = window.PULMO_LESSON_ID || window.LESSON_ID

console.log(`PulmoLearn: lessonId="${lessonId}" userId="${userId}"`)

if (!lessonId) {
  console.error('PulmoLearn: window.LESSON_ID is not set on this lesson page.')
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
  const visible = Array.from(allSections).filter(s => !s.classList.contains('lesson-hidden')).length
  console.log(`PulmoLearn: calculateProgress — ${visible} visible / ${total} total = ${Math.round((visible / total) * 100)}%`)
  return Math.round((visible / total) * 100)
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
    </div>
  `
  lessonStack.appendChild(banner)
  setTimeout(() => banner.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
}

// ── Resume banner ──
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
    setTimeout(() => lastVisible.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
  }
  setTimeout(() => { if (banner.parentNode) banner.remove() }, 6000)
}

// ── Reset progress ──
async function resetProgress() {
  console.log(`PulmoLearn: Resetting progress for "${lessonId}"`)
  await supabase.from('progress').upsert({
    user_id: userId,
    lesson_id: lessonId,
    percent: 0,
    completed: false,
    updated_at: new Date().toISOString()
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

async function saveProgress() {
  if (!lessonId || !userId) return

  const percent = calculateProgress()
  const completed = isLessonComplete()

  console.log(`PulmoLearn: Saving — ${lessonId} ${percent}% completed=${completed}`)

  const { error } = await supabase.from('progress').upsert({
    user_id: userId,
    lesson_id: lessonId,
    percent,
    completed,
    updated_at: new Date().toISOString(),
    ...(completed ? { completed_at: new Date().toISOString() } : {})
  }, { onConflict: 'user_id,lesson_id' })

  if (error) {
    console.error('PulmoLearn: Failed to save progress:', error.message)
  } else {
    console.log(`PulmoLearn: Save confirmed — ${lessonId} ${percent}%`)
    // ── Sync to localStorage so courses.js dropdown stays current ──
    if (typeof window.saveCourseProgress === 'function') {
      const fileName = window.location.pathname.split('/').pop()
      window.saveCourseProgress(fileName, percent, completed)
    }
    if (completed) showCompletionBanner()
  }
}

// ── Restore progress on load ──
async function restoreProgress() {
  if (!lessonId || !userId) return

  console.log(`PulmoLearn: Checking for saved progress for "${lessonId}"`)

  const { data, error } = await supabase
    .from('progress')
    .select('percent, completed')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  console.log(`PulmoLearn: restoreProgress result — data=${JSON.stringify(data)} error=${JSON.stringify(error)}`)

  if (error || !data || data.percent < 10) {
    console.log('PulmoLearn: No meaningful progress to restore — starting fresh')
    return
  }

  const allSections = getAllSections()
  const total = allSections.length
  console.log(`PulmoLearn: Restoring to ${data.percent}% — ${total} total sections`)
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

  // ── Sync restored data to localStorage so courses.js dropdown reflects it ──
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

// ── Safely call a lesson init function by name ──
// Checks it exists and hasn't already been initialized
function callInit(name) {
  if (typeof window[name] === 'function') {
    console.log(`PulmoLearn: Calling ${name}`)
    try {
      window[name]()
    } catch (e) {
      console.warn(`PulmoLearn: ${name} threw an error:`, e.message)
    }
  }
}

// ── MutationObserver ──
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

  // Re-run all lesson init functions now that DOM is fully ready.
  // These run too early during initial script parse so listeners
  // don't attach correctly. Running them again on load fixes this.
  // Each function is guarded so it only runs if it exists in the lesson.
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
  // Shuffle sequence multiple times for better randomization
  if (typeof shuffleSequence === 'function') {
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
    shuffleSequence()
  }
  
  
// ── Review mode — auto-show correct answers ──
  if (new URLSearchParams(window.location.search).get('review') === 'true') {
    console.log('PulmoLearn: Review mode — auto-completing all activities')
    setTimeout(() => {
      // Auto-select correct quiz options
      document.querySelectorAll('.quiz-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) {
          btn.click()
        }
      })

      // Auto-select correct knowledge check options
      document.querySelectorAll('.knowledge-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) {
          btn.click()
        }
      })

      // Auto-select correct case options
      document.querySelectorAll('.case-option[data-correct="true"]').forEach(btn => {
        if (!btn.closest('[data-correct-answered="true"]')) {
          btn.click()
        }
      })

      // Auto-select correct sort answers
      document.querySelectorAll('.sort-row').forEach(row => {
        const select = row.querySelector('select')
        if (select && row.dataset.answer) {
          select.value = row.dataset.answer
        }
      })

      // Click check buttons to confirm sorts
      document.querySelectorAll('[id^="check"]').forEach(btn => {
        if (btn.tagName === 'BUTTON') btn.click()
      })

      // Click all hotspots
      document.querySelectorAll('.hotspot-btn').forEach(btn => btn.click())

    }, 500)
  }
  // Save immediately when user clicks any dashboard link
  document.querySelectorAll('a[href*="dashboard"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      saveProgress() // fire and forget
      window.location.href = link.href
    })
  })

  setTimeout(async () => {
    console.log('PulmoLearn: 3500ms delay complete — running init')

    const sections2 = getAllSections()
    const hidden2 = Array.from(sections2).filter(s => s.classList.contains('lesson-hidden')).length
    console.log(`PulmoLearn: After 3500ms — ${sections2.length} total, ${hidden2} hidden, ${sections2.length - hidden2} visible`)

    const isRestart = new URLSearchParams(window.location.search).get('restart') === 'true'
    console.log(`PulmoLearn: isRestart=${isRestart}`)

    if (isRestart) {
      await resetProgress()
    } else {
      await restoreProgress()
    }

    observerPaused = false
    console.log('PulmoLearn: Observer enabled')
    console.log('PulmoLearn: Ready — waiting for user interaction to save')
  }, 3500)
})

// ── Save on tab close ──
window.addEventListener('pagehide', () => {
  if (!lessonId || !userId) return
  const percent = calculateProgress()
  const completed = isLessonComplete()
  navigator.sendBeacon(
    `${supabase.supabaseUrl}/rest/v1/progress`,
    new Blob([JSON.stringify({
      user_id: userId, lesson_id: lessonId, percent, completed,
      updated_at: new Date().toISOString()
    })], { type: 'application/json' })
  )
})

console.log(`PulmoLearn: Setup complete for "${lessonId}"`)
