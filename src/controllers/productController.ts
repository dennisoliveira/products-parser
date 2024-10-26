import { Request, Response } from 'express'
import productService from '../services/productService'

// const createProduct = async () => {
//   try {
//     const product = {
//       code: 123456,
//       status: 'published',
//       imported_t: Date(),
//       product_name: 'Pizza',
//     }
//     await Product.findOneAndUpdate({ code: 123456 }, product, {
//       upsert: true,
//       new: true,
//       setDefaultsOnInsert: true,
//     })
//     console.log('Produto criado/atualizado com sucesso')
//   } catch (error: any) {
//     console.log(error.message)
//   }
// }

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts()
    res.json(products)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
