import { Router } from 'express'
import {
  createProduct,
  getProducts,
  getProductById,
  searchProducts,
  updateProductById,
  deleteProductById,
} from '../controllers/productController'

const router = Router()

router.post('/products', createProduct)
router.get('/products/search', searchProducts)
router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.put('/products/:id', updateProductById)
router.delete('/products/:id', deleteProductById)

export default router
