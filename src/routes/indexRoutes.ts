import { Router } from 'express'
import { getStatus } from '../controllers/indexController'

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota de status da API
 *     description: Retorna um Json com alguns status
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 api:
 *                   type: string
 *                   example: 'Products Parser API'
 *                 uptime:
 *                   type: string
 *                   example: '0h 0m 4.471132828s'
 *                 memory:
 *                   type: string
 *                   example: '277.74 MB'
 *                 mongoStatus:
 *                   type: string
 *                   example: 'Conectado'
 *                 lastImport:
 *                   type: string
 *                   example: '2024-10-28T19:12:31.563Z'
 */
router.get('/', getStatus)

export default router
