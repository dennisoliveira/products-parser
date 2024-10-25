import { downloadIndexFiles, readIndexFile } from './indexFileTasks'
import { downloadProductsFiles, readProductsFiles } from './productsFileTasks'
;(async () => {
  // await downloadIndexFiles()
  // const filesToDownload = await readIndexFile()

  // const extratedFiles = await downloadProductsFiles(filesToDownload)
  // console.log(`Tarefas finalizadas`)
  const extratedFiles = ['products_01.json', 'products_02.json']

  console.log(await readProductsFiles(extratedFiles, 2))
})()
