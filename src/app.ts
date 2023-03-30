import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { positionsRoutes, teamsRoutes } from './routes'
import { errorHandler } from 'middlewares/errorMiddleware'

export const app = express()

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({}))

/* Routes */
app.use('/teams', teamsRoutes)
app.use('/positions', positionsRoutes)

// Home page
app.get('/', (_, res) => {
  res.send('Welcome to Node.js Server"')
})

// overwrite the default express error handler with custom error handler middleware
app.use(errorHandler) // <-- error handler middleware

app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Server is listening at http://localhost:${process.env.SERVER_PORT}`
  )
)
