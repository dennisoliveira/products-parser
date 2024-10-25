import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { setupSwagger } from './swagger'

import mongodbConnect from './config/mongodb-connect'
import Product from './models/product'

dotenv.config()

const app: Application = express()
setupSwagger(app)
mongodbConnect()

const PORT = process.env.PORT || 3000

const createProduct = async () => {
  try {
    const product = new Product({
      code: 123456,
      status: 'published',
      imported_t: '2020-02-07T16:00:00Z',
    })
    await product.save()
    console.log('Produto criado com sucesso')
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
