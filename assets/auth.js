import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fxcbcspwqmrmifbgjpnt.supabase.co'  // ← paste yours
const SUPABASE_KEY = 'sb_publishable_H8_ZHl_wUQzejJm0LAmUiw_9XDZck4k'                         // ← paste yours

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = '/dashboard.html'
  }
  return session
}

export async function requireAccess() {
  const session = await requireAuth()
  if (!session) return null

  // Admin users get full access
  const { data: adminUser } = await supabase
    .from('admin_users')
    .select('user_id')
    .eq('user_id', session.user.id)
    .maybeSingle()

  if (adminUser) {
    return session
  }

  // Paid users get access
  const { data: accessData } = await supabase
    .from('user_access')
    .select('access_type')
    .eq('user_id', session.user.id)
    .maybeSingle()

  if (!accessData) {
    window.location.href = '/payment.html'
    return null
  }

  return session
}
}
export async function signOut() {
  await supabase.auth.signOut()
  window.location.href = '/'
}
