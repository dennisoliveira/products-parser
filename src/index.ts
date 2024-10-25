import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { setupSwagger } from './swagger'
import scheduleTasks from './tasks'

import mongodbConnect from './config/mongodb-connect'
import Product from './models/product'

dotenv.config()

console.log('Iniciando tarefas agendadas...')
// scheduleTasks()

const app: Application = express()
setupSwagger(app)
mongodbConnect()

const PORT = process.env.PORT || 3000

const createProduct = async () => {
  try {
    const product = {
      code: 123456,
      status: 'published',
      imported_t: Date(),
      product_name: 'Pizza',
    }
    await Product.findOneAndUpdate({ code: 123456 }, product, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    })
    console.log('Produto criado/atualizado com sucesso')
  } catch (error: any) {
    console.log(error.message)
  }
}

app.get('/', (req: Request, res: Response) => {
  createProduct()
  res.send('Products Parser API')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`Docs is running on http://localhost:${PORT}/api-docs`)
})
