import { TCard, cards } from '@/app/data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TCard>
) {
    res.status(200).json(cards.find(el => el.id === req.query.id)!);
}