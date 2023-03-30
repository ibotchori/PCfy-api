import { getPositions } from 'controllers'
import express from 'express'

const router = express.Router()

router.get('/get-positions', getPositions)

export default router
