import { getTeams } from 'controllers/teamsController'
import express from 'express'

const router = express.Router()

router.get('/get-teams', getTeams)

export default router
