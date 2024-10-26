import { Request, Response } from 'express'
import productService from '../services/productService'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newpProduct = await productService.createProduct(req.body)
    res.status(201).json(newpProduct)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts()
    res.json(products)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id)
    if (!product) {
      res.status(404).json({ message: 'Product not found' })
      return
    }
    res.json(product)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProductById(
      req.params.id,
      req.body,
    )
    if (!product) {
      res.status(404).json({ message: 'Product not found' })
      return
    }
    res.json({
      message: 'Product updated',
      product,
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.deleteProductById(req.params.id)
    if (!product) {
      res.status(404).json({ message: 'Product not found' })
      return
    }
    res.json({
      message: 'Product deleted',
      product,
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
