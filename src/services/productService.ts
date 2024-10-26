import Product, { IProduct } from '../models/product'

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
