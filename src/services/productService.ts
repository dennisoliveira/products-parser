import Product, { IProduct } from '../models/product'

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

export const getAllProducts = async (): Promise<IProduct[] | any[]> => {
  return await Product.find()
}

export const getProductById = async (
  code: string,
): Promise<IProduct | null> => {
  return await Product.findOne({ code })
}

export const createProduct = async (data: any): Promise<IProduct> => {
  const product: IProduct = new Product({
    ...data,
    status: 'published',
    imported_t: Date(),
  })
  return await product.save()
}

export const updateProductById = async (
  code: string,
  data: any,
): Promise<IProduct | null> => {
  return await Product.findOneAndUpdate({ code }, { $set: data }, { new: true })
}

export const deleteProductById = async (
  code: string,
): Promise<IProduct | null> => {
  return await Product.findOneAndDelete({ code })
}

export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
}