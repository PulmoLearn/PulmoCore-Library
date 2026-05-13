import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fxcbcspwqmrmifbgjpnt.supabase.co'  // ← paste yours
const SUPABASE_KEY = sb_publishable_H8_ZHl_wUQzejJm0LAmUiw_9XDZck4k                         // ← paste yours

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = '/login.html'
  }
  return session
}

export async function requireAccess() {
  const session = await requireAuth()
  const { data } = await supabase
    .from('user_access')
    .select('*')
    .eq('user_id', session.user.id)
    .single()
  if (!data) {
    window.location.href = '/signup.html'
  }
  return session
}
