import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { positions } from 'data'

export const getPositions = asyncHandler(async (_, res: Response) => {
  try {
    res.json(positions)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
    throw new Error('Error')
  }
})
