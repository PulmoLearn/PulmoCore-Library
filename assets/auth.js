import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fxcbcspwqmrmifbgjpnt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_H8_ZHl_wUQzejJm0LAmUiw_9XDZck4k'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function requireAuth() {
  const { data: { session }, error } = await supabase.auth.getSession()

  if (error) console.error('Auth session error:', error.message)

  if (!session) {
    window.location.href = '/login.html'
    return null
  }

  return session
}

export async function requireAccess() {
  const session = await requireAuth()
  if (!session) return null

  const { data: adminUser, error: adminError } = await supabase
    .from('admin_users')
    .select('user_id')
    .eq('user_id', session.user.id)
    .maybeSingle()

  if (adminError) console.warn('Admin check failed:', adminError.message)

  if (adminUser) {
    console.log('Admin access granted')
    return session
  }

  const { data: accessData, error: accessError } = await supabase
    .from('user_access')
    .select('access_type')
    .eq('user_id', session.user.id)
    .maybeSingle()

  if (accessError) console.warn('Paid access check failed:', accessError.message)

  if (!accessData) {
    window.location.href = '/payment.html'
    return null
  }

  return session
}

export async function signOut() {
  await supabase.auth.signOut()
  window.location.href = '/'
}
