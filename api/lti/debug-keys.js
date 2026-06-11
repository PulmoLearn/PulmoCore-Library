export default function handler(req, res) {
  const priv = process.env.LTI_PRIVATE_KEY || ''
  const pub  = process.env.LTI_PUBLIC_KEY  || ''
  return res.status(200).json({
    privateLine1: priv.split('\n')[0],
    publicLine1:  pub.split('\n')[0],
  })
}