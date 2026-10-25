/** PulmoLearn ABG Challenge — authenticated per-session reporting v1.0.
 * Free anonymous gameplay and the existing leaderboard remain untouched.
 */
import { supabase } from '/assets/auth.js';

let userId = null;
let authChecked = false;
let queue = Promise.resolve();
const terminalSessions = new Set();

async function getUserId() {
  if (authChecked) return userId;
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    userId = user?.id || null;
    authChecked = true; // Recheck only when an unauthenticated visitor starts a new session.
  } catch (error) {
    console.warn('ABG session auth not available:', error.message);
  }
  return userId;
}

window.addEventListener('pulmolearn:abg-session', event => {
  const snapshot = event.detail?.snapshot;
  if (!snapshot?.session_id) return;
  const terminal = ['finished','posted','restarted'].includes(snapshot.status);
  if (terminalSessions.has(snapshot.session_id)) return;
  if (terminal) terminalSessions.add(snapshot.session_id);

  // Serialize operations to avoid a slow previous save overwriting a newer score.
  queue = queue.catch(() => {}).then(async () => {
    if (!authChecked || !userId) {
      authChecked = false;
      await getUserId();
    }
    if (!userId) return; // No personal records for public/anonymous visitors.
    const payload = {
      ...snapshot,
      user_id: userId,
      updated_at: new Date().toISOString(),
      ...(terminal ? { ended_at: new Date().toISOString() } : {})
    };
    const { error } = await supabase.from('abg_practice_sessions')
      .upsert(payload, { onConflict: 'session_id' });
    if (error) {
      console.warn('ABG practice session sync failed:', error.message);
      if (terminal) terminalSessions.delete(snapshot.session_id);
    }
  });
  event.detail?.waitUntil?.(queue);
});
