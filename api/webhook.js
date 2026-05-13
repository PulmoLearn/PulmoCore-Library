const Stripe = require('stripe')
const { createClient } = require('@supabase/supabase-js')

// We use the service role key here (server-side only, never exposed to browser)
// This key bypasses row-level security so we can write to user_access on behalf of the user
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Read the raw request body without parsing it
// Stripe requires the raw bytes to verify the webhook signature
const getRawBody = (req) => new Promise((resolve, reject) => {
  const chunks = []
  req.on('data', chunk => chunks.push(chunk))
  req.on('end', () => resolve(Buffer.concat(chunks)))
  req.on('error', reject)
})

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const sig = req.headers['stripe-signature']
  let event

  // Verify the webhook came from Stripe and not someone else
  try {
    const rawBody = await getRawBody(req)
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Only act on successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // Retrieve the Supabase user ID we stored in metadata when creating the session
    const userId = session.metadata?.user_id

    if (!userId) {
      console.error('No user_id in session metadata')
      return res.status(400).json({ error: 'Missing user_id in metadata' })
    }

    // Check they don't already have access (e.g. duplicate webhook)
    const { data: existing } = await supabase
      .from('user_access')
      .select('user_id')
      .eq('user_id', userId)
      .single()

    if (!existing) {
      // Grant access — write to user_access table
      const { error } = await supabase.from('user_access').insert({
        user_id: userId,
        access_type: 'paid',
      })

      if (error) {
        console.error('Supabase insert error:', error.message)
        return res.status(500).json({ error: 'Failed to grant access' })
      }

      console.log(`Access granted to user: ${userId}`)
    } else {
      console.log(`User ${userId} already has access — skipping duplicate`)
    }
  }

  // Always return 200 so Stripe knows the webhook was received
  res.status(200).json({ received: true })
}
