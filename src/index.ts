import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { setupSwagger } from './docs/swagger'
import scheduleTasks from './tasks'
import productRoutes from './routes/productRoutes'
import mongodbConnect from './config/mongodb-connect'
import getProcessUptime from './utils/getProcessUptime'

dotenv.config()

mongodbConnect()

// console.log('Iniciando tarefas agendadas...')
// scheduleTasks()

const app: Application = express()
setupSwagger(app)
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/', productRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send(`Products Parser API
    Uptime do sistema: ${getProcessUptime()}
  `)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`Docs is running on http://localhost:${PORT}/api-docs`)
})
