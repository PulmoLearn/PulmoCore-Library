/**
 * PulmoLearn Progress Tracker
 * Add to every lesson page just before </body>:
 *   <script>window.LESSON_ID = 'als'</script>
 *   <script type="module" src="/assets/progress-tracker.js"></script>
 *
 * Saves + restores progress via Supabase, and shows a completion
 * banner when the user reaches the end of the lesson.
 */

import { supabase } from '/assets/auth.js'

// ── Auth check ──
const { data: { session } } = await supabase.auth.getSession()
if (!session) {
  window.location.href = '/login.html'
  throw new Error('Not authenticated')
}

const userId = session.user.id
const lessonId = window.LESSON_ID

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
  return document.querySelectorAll('.lesson-stack > section')
}

function calculateProgress() {
  const allSections = getAllSections()
  const total = allSections.length
  if (!total) return 0
  const visible = Array.from(allSections).filter(s => !s.classList.contains('lesson-hidden')).length
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

// ── Reset progress (used by Restart Lesson) ──
async function resetProgress() {
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

  console.log(`PulmoLearn: Progress reset for "${lessonId}"`)
}

// ── Save progress ──
let saveTimer = null

// Start paused — prevents observer firing during initializeProgressiveSections()
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
    console.log(`PulmoLearn: Saved — ${lessonId} ${percent}% ${completed ? '✓' : ''}`)
    if (completed) showCompletionBanner()
  }
}

// ── Restore progress on load ──
async function restoreProgress() {
  if (!lessonId || !userId) return

  // maybeSingle() returns null instead of 406 error when no row exists
  const { data, error } = await supabase
    .from('progress')
    .select('percent, completed')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  // No saved progress or error — start fresh, nothing to restore
  if (error || !data || data.percent < 10) return

  const allSections = getAllSections()
  const total = allSections.length
  if (!total) return

  const sectionsToReveal = Math.round((data.percent / 100) * total)
  if (sectionsToReveal <= 1) return

  allSections.forEach((section, index) => {
    if (index < sectionsToReveal) section.classList.remove('lesson-hidden')
  })

  // Remove orphaned continue buttons from already-completed sections
  allSections.forEach((section, index) => {
    if (index < sectionsToReveal - 1) {
      const btn = section.querySelector('.section-continue')
      if (btn) btn.remove()
    }
  })

  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('progressRestored'))
  }, 200)

  if (data.completed) {
    completionShown = false
    setTimeout(showCompletionBanner, 600)
  } else {
    showResumeBanner(data.percent, sectionsToReveal, allSections)
  }

  console.log(`PulmoLearn: Restored ${lessonId} to ${data.percent}%`)
}

// ── MutationObserver — watches for section reveals ──
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
  setTimeout(async () => {
    const isRestart = new URLSearchParams(window.location.search).get('restart') === 'true'
    if (isRestart) {
      await resetProgress()
    } else {
      await restoreProgress()
    }

    // Enable observer now that lesson init and restore are both complete
    observerPaused = false

    // Delay first save so everything has fully settled
    setTimeout(saveProgress, 2000)
  }, 800)
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

console.log(`PulmoLearn: Progress tracker active for "${lessonId}"`)
