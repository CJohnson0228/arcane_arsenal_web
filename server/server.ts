import express, { Request, Response, Express } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/db'
import characterRoutes from './routes/characters'
import userRoutes from './routes/user'

dotenv.config()

// === Server Setup
const app: Express = express()

// === Middleware
app.use(express.json())

app.use((req: Request, res: Response, next) => {
  console.log(req.path, req.method)
  next()
})

// === Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Arcane Arsenal Typescript Server')
})

app.use('/api/characters', characterRoutes)
app.use('/api/user', userRoutes)

// === Mongo Database
connectDB()
  .then(() => {
    // === listen for requests
    const port = process.env.PORT || 8082
    try {
      app.listen(port, (): void => console.log(`Server running at http://localhost:${port}`))
    } catch (error: any) {
      console.error(`Error occures: ${error.message}`)
    }
  })
  .catch((error) => {
    console.log(error)
  })
