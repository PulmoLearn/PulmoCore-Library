import Stripe from 'stripe'

const parseBody = (req) =>
  new Promise((resolve, reject) => {
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

export default async function handler(req, res) {
  const origin = req.headers.origin

  const allowedOrigins = [
    'https://pulmolearn.com',
    'https://www.pulmolearn.com'
  ]

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  try {
    const { userId, email } = await parseBody(req)

    if (!userId) {
      return res.status(400).json({
        error: 'Missing user ID — please log in first.'
      })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is missing')

      return res.status(500).json({
        error: 'Stripe secret key is not configured.'
      })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',

      payment_method_types: ['card'],

      line_items: [
        {
          price: 'price_1U20FSCN4cYiptezLQuuSPev',
          quantity: 1
        }
      ],

      customer_email: email,

      metadata: {
        user_id: userId
      },

      success_url:
        'https://www.pulmolearn.com/success.html?session_id={CHECKOUT_SESSION_ID}',

      cancel_url:
        'https://www.pulmolearn.com/payment.html'
    })

    return res.status(200).json({
      url: session.url
    })

  } catch (err) {
    console.error('Stripe checkout error:', err)

    return res.status(500).json({
      error:
        err.message ||
        'Failed to create checkout session. Please try again.'
    })
  }
}
