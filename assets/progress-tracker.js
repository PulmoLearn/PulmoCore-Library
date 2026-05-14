/**
 * PulmoLearn Progress Tracker
 * Drop this into any lesson page with:
 *   <script>window.LESSON_ID = 'als'</script>
 *   <script type="module" src="/assets/progress-tracker.js"></script>
 *
 * Saves progress to Supabase as the user moves through the lesson,
 * and restores their position when they return to the page.
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

// ── Calculate progress based on revealed sections ──
function calculateProgress() {
  const allSections = document.querySelectorAll('.lesson-stack > section')
  const total = allSections.length
  if (!total) return 0
  const visible = Array.from(allSections).filter(s => !s.classList.contains('lesson-hidden')).length
  return Math.round((visible / total) * 100)
}

// ── Check if the final section is visible (lesson complete) ──
function isLessonComplete() {
  const allSections = document.querySelectorAll('.lesson-stack > section')
  if (!allSections.length) return false
  const last = allSections[allSections.length - 1]
  return !last.classList.contains('lesson-hidden')
}

// ── Restore progress on page load ──
async function restoreProgress() {
  if (!lessonId || !userId) return

  const { data, error } = await supabase
    .from('progress')
    .select('percent, completed')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .single()

  if (error || !data || data.percent === 0) return

  const allSections = document.querySelectorAll('.lesson-stack > section')
  const total = allSections.length
  if (!total) return

  const sectionsToReveal = Math.round((data.percent / 100) * total)
  if (sectionsToReveal <= 1) return

  // Pause observer so bulk reveals don't trigger saves
  observerPaused = true

  // Reveal sections up to saved position
  allSections.forEach((section, index) => {
    if (index < sectionsToReveal) {
      section.classList.remove('lesson-hidden')
    }
  })

  // Remove orphaned continue buttons from already-completed sections
  allSections.forEach((section, index) => {
    if (index < sectionsToReveal - 1) {
      const continueBtn = section.querySelector('.section-continue')
      if (continueBtn) continueBtn.remove()
    }
  })

  // Resume observer
  setTimeout(() => {
    observerPaused = false
    document.dispatchEvent(new CustomEvent('progressRestored'))
  }, 200)

  // Show resume banner and scroll to last section
  if (data.percent > 0 && data.percent < 100) {
    showResumeBanner(data.percent, sectionsToReveal, allSections)
  }

  console.log(`PulmoLearn: Restored ${lessonId} to ${data.percent}%`)
}

// ── Resume banner ──
function showResumeBanner(percent, sectionsRevealed, allSections) {
  const style = document.createElement('style')
  style.textContent = `@keyframes plSlideUp { from { opacity:0; transform:translateX(-50%) translateY(16px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`
  document.head.appendChild(style)

  const banner = document.createElement('div')
  banner.style.cssText = `
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
    background:#0B1F33; color:#fff; border:1px solid rgba(28,167,168,0.4);
    border-radius:14px; padding:14px 22px;
    display:flex; align-items:center; gap:14px;
    box-shadow:0 12px 32px rgba(0,0,0,0.3);
    z-index:999; font-family:"Atkinson Hyperlegible",Arial,sans-serif;
    font-size:.95rem; font-weight:700; white-space:nowrap;
    animation:plSlideUp .3s ease;
  `
  banner.innerHTML = `
    <span style="color:#1CA7A8;">↩</span>
    <span>Resumed at ${percent}% — scroll up to review earlier sections</span>
    <button onclick="this.closest('div').remove()" style="
      background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2);
      border-radius:8px; color:#fff; padding:4px 10px; cursor:pointer; font-size:.85rem;
    ">✕</button>
  `
  document.body.appendChild(banner)

  // Scroll to last revealed section
  const lastVisible = allSections[sectionsRevealed - 1]
  if (lastVisible) {
    setTimeout(() => lastVisible.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
  }

  setTimeout(() => { if (banner.parentNode) banner.remove() }, 6000)
}

// ── Debounce saves ──
let saveTimer = null
let observerPaused = false

function scheduleSave() {
  if (observerPaused) return
  clearTimeout(saveTimer)
  saveTimer = setTimeout(saveProgress, 600)
}

// ── Save progress to Supabase ──
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
  }
}

// ── Watch for sections being revealed ──
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

// ── Also save when activityComplete fires ──
document.addEventListener('activityComplete', scheduleSave)

// ── Restore on load, then save ──
window.addEventListener('load', async () => {
  // Wait for lesson's initializeProgressiveSections() to run first
  setTimeout(async () => {
    await restoreProgress()
    setTimeout(saveProgress, 500)
  }, 400)
})

// ── Save on tab close ──
window.addEventListener('pagehide', () => {
  if (!lessonId || !userId) return
  const percent = calculateProgress()
  const completed = isLessonComplete()
  const payload = JSON.stringify({
    user_id: userId,
    lesson_id: lessonId,
    percent,
    completed,
    updated_at: new Date().toISOString()
  })
  navigator.sendBeacon(
    `${supabase.supabaseUrl}/rest/v1/progress`,
    new Blob([payload], { type: 'application/json' })
  )
})

console.log(`PulmoLearn: Progress tracker active for "${lessonId}"`)
