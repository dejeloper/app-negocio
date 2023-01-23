// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export const fizzbuzz = (number: number): string | number => {
  if (typeof number !== 'number') { throw new Error('parameter provider must be a number') }

  if (Number.isNaN(number)) { throw new Error('parameter provider must be a number') }

  if (number % 15 === 0) return 'fizzbuzz'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'

  return number
}