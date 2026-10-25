/** PulmoLearn ABG Learning Center — completion-only tracking v1.0 */
import { supabase } from '/assets/auth.js';

const lessonId = document.body?.dataset?.lessonId || window.LESSON_ID;
const titles = {
  free_abg_step_1: 'ABG Step 1: Start With the pH',
  free_abg_step_2: 'ABG Step 2: Respiratory or Metabolic?',
  free_abg_step_3: 'ABG Step 3: Is Compensation Happening?',
  free_abg_step_4: 'ABG Step 4: When the pH Looks Normal',
  free_abg_step_5: 'ABG Step 5: Put It All Together'
};

const progressKey = 'pulmolearn_free_abg_progress';
let saved = false;
let saving = false;

function locallyCompleted() {
  if (!Object.hasOwn(titles, lessonId)) return false;
  try {
    const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
    return progress[lessonId]?.completed === true;
  } catch {
    return false;
  }
}

async function syncCompletion() {
  if (saved || saving || !locallyCompleted()) return;
  saving = true;
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) return; // Free anonymous visitors can continue normally.

    const { data: existing, error: readError } = await supabase
      .from('lesson_progress')
      .select('completed')
      .eq('user_id', user.id)
      .eq('lesson_id', lessonId)
      .maybeSingle();
    if (readError) throw readError;
    if (existing?.completed) {
      saved = true;
      return;
    }

    const now = new Date().toISOString();
    const { error } = await supabase.from('lesson_progress').upsert({
      user_id: user.id,
      course_id: 'abg-learning-center',
      lesson_id: lessonId,
      lesson_title: titles[lessonId],
      percent_complete: 100,
      completed: true,
      total_seconds: 0, // Not measured for short ABG learning steps.
      completed_at: now,
      last_visited_at: now,
      updated_at: now
    }, { onConflict: 'user_id,lesson_id' });
    if (error) throw error;
    saved = true;
    console.log('PulmoLearn ABG completion synced:', lessonId);
  } catch (err) {
    console.warn('PulmoLearn ABG completion sync failed:', err.message || err);
  } finally {
    saving = false;
  }
}

if (Object.hasOwn(titles, lessonId)) {
  syncCompletion();
  // Existing ABG lessons store completion in localStorage only after the final Continue.
  const poll = setInterval(() => {
    if (saved) return clearInterval(poll);
    if (locallyCompleted()) syncCompletion();
  }, 1500);
  window.addEventListener('focus', syncCompletion);
  window.addEventListener('pageshow', syncCompletion);
}
