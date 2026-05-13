const Stripe = require('stripe')

// Helper to read and parse JSON body from the request stream
const parseBody = (req) => new Promise((resolve, reject) => {
  const chunks = []
  req.on('data', chunk => chunks.push(chunk))
  req.on('end', () => {
    try {
      resolve(JSON.parse(Buffer.concat(chunks).toString()))
    } catch {
      resolve({})
    }
  })
  req.on('error', reject)
})

module.exports = async (req, res) => {
  // CORS headers so payment.html can call this function
  res.setHeader('Access-Control-Allow-Origin', 'https://pulmolearn.com')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { userId, email } = await parseBody(req)

  if (!userId) {
    return res.status(400).json({ error: 'Missing user ID — please log in first.' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: process.env.STRIPE_PRICE_ID,
        quantity: 1,
      }],
      mode: 'payment',
      // After payment, Stripe redirects here
      success_url: 'https://pulmolearn.com/success.html?session_id={CHECKOUT_SESSION_ID}',
      // If user cancels, send them back to payment page
      cancel_url: 'https://pulmolearn.com/payment.html',
      customer_email: email,
      // We store the user's Supabase ID in metadata so the webhook
      // can match the payment back to the correct account
      metadata: {
        user_id: userId,
      },
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err.message)
    res.status(500).json({ error: 'Failed to create checkout session. Please try again.' })
  }
}
