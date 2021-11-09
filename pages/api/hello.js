import { URL } from 'url'

import { Blake3Hasher } from '@napi-rs/blake-hash'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default function handler(req, res) {
  const hasher = new Blake3Hasher()
  const url = new URL(`http://localhost${req.url}`)
  hasher.update(url.searchParams.get('secret'))
  res.status(200).json({ hash: hasher.digest('hex') })
}
