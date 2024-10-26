import { Router } from 'express'
import { getProducts } from '../controllers/productController'

const router = Router()

router.get('/products', getProducts)
router.post('/products', getProducts)
router.put('/products/:id', getProducts)
router.delete('/products/:id', getProducts)

export default router
