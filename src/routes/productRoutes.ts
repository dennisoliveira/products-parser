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

/**
 * @swagger
 * /products:
 *   post:
 *     description: Retorna um Json com todos os produtos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: O ID do produto
 *               product_name:
 *                 type: string
 *                 description: O nome do produto
 *             required:
 *               - code
 *               - product_name
 *     responses:
 *       201:
 *         description: Produto adicionado com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post('/products', createProduct)

/**
 * @swagger
 * /products/search:
 *   get:
 *     description: Retorna um Json com todos os produtos
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: O termo para buscar os produtos.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/products/search', searchProducts)

/**
 * @swagger
 * /products:
 *   get:
 *     description: Retorna um Json com todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/products', getProducts)

/**
 * @swagger
 * /products/:id:
 *   get:
 *     description: Retorna um Json com todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/products/:id', getProductById)

/**
 * @swagger
 * /products/:id:
 *   put:
 *     description: Retorna um Json com todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.put('/products/:id', updateProductById)

/**
 * @swagger
 * /products/:id:
 *   delete:
 *     description: Retorna um Json com todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.delete('/products/:id', deleteProductById)

export default router
