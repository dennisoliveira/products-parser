import express, { Application, Request, Response } from 'express'
import { setupSwagger } from './swagger'

const app: Application = express()
setupSwagger(app)

const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Products Parser API')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`Docs is running on http://localhost:${PORT}/api-docs`)
})
