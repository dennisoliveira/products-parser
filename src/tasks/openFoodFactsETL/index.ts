import { downloadIndexFiles, readIndexFile } from './indexFileTasks'
import { downloadProductsFiles, readProductsFiles } from './productsFileTasks'
import { loadToElasticsearch, loadToMongodb } from './loadProductsTasks'
import importService from '../../services/importService'
import mongodbConnect from '../../config/mongodb-connect'

const openfoodfactsETLTasks = async () => {
  mongodbConnect()

  try {
    console.log('Iniciando download dos arquivos...')
    await downloadIndexFiles()
    const filesToDownload = await readIndexFile()
    const extratedFiles = await downloadProductsFiles(filesToDownload)

    // const extratedFiles = [
    //   'products_01.json',
    //   'products_02.json',
    //   'products_03.json',
    //   'products_04.json',
    //   'products_05.json',
    //   'products_06.json',
    //   'products_07.json',
    //   'products_08.json',
    //   'products_09.json',
    // ]

    console.log('Iniciando leitura dos arquivos...')
    const productsJson = await readProductsFiles(extratedFiles, 100)

    console.log('Carregando os dados no Elasticsearch e Mongo...')
    const elasticsearchImportResult = await loadToElasticsearch(
      'product-index',
      productsJson,
    )
    const mongoImportResult = await loadToMongodb(productsJson)

    await importService.createImport(
      mongoImportResult,
      elasticsearchImportResult,
    )
    console.log(`Tarefas openfoodfactsETLTasks finalizadas com exito!`)
  } catch (error: any) {
    console.log(error.message)
  }
}

export default openfoodfactsETLTasks
