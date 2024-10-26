import { downloadIndexFiles, readIndexFile } from './indexFileTasks'
import { downloadProductsFiles, readProductsFiles } from './productsFileTasks'
import mongodbConnect from '../../config/mongodb-connect'
import Product from '../../models/product'

const openfoodfactsETLTasks = async () => {
  mongodbConnect()
  // await downloadIndexFiles()
  // const filesToDownload = await readIndexFile()

  // const extratedFiles = await downloadProductsFiles(filesToDownload)
  const extratedFiles = [
    'products_01.json',
    'products_02.json',
    'products_03.json',
    'products_04.json',
    'products_05.json',
    'products_06.json',
    'products_07.json',
    'products_08.json',
    'products_09.json',
  ]

  const productsJson = await readProductsFiles(extratedFiles, 2)

  const bulkOps = productsJson.map((product) => {
    return {
      updateOne: {
        filter: { code: product.code },
        update: { $set: product },
        upsert: true,
      },
    }
  })

  try {
    const result = await Product.bulkWrite(bulkOps)
    console.log('Resultado da operação em lote:', result)
    console.log(`Tarefas openfoodfactsETLTasks finalizadas`)
  } catch (error) {
    console.error('Erro ao inserir ou atualizar usuários:', error)
  }
}

export default openfoodfactsETLTasks
