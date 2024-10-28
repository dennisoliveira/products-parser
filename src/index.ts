import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { setupSwagger } from './docs/swagger'
import scheduleTasks from './tasks'
import indexRoutes from './routes/indexRoutes'
import productRoutes from './routes/productRoutes'
import mongodbConnect from './config/mongodb-connect'

dotenv.config()

mongodbConnect()

const app: Application = express()
setupSwagger(app)
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/', productRoutes)
app.get('/', indexRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`Docs is running on http://localhost:${PORT}/api-docs`)
  console.log('Registrando tarefas agendadas...')
  scheduleTasks()
})
