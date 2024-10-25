import { downloadIndexFiles, readIndexFile } from './indexFileTasks'
import { downloadProductsFiles } from './productsFileTasks'
;(async () => {
  await downloadIndexFiles()
  const filesToDownload = await readIndexFile()

  await downloadProductsFiles(filesToDownload)
  console.log(`Tarefas finalizadas`)
})()
