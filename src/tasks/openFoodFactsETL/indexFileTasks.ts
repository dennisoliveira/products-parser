import downloadFile from '../../utils/downloadFile'
import readFile from '../../utils/readFile'

export const downloadIndexFiles = async () => {
  const indexOriginFiles: string =
    'https://challenges.coode.sh/food/data/json/index.txt'
  const indexDestinationFolder: string = './temp'
  const indexFileName: string = 'index.txt'
  try {
    await downloadFile(indexOriginFiles, indexDestinationFolder, indexFileName)
    console.log(`Arquivo ${indexFileName} baixado com sucesso!`)
    return true
  } catch (error) {
    console.error(`Erro ao baixar arquivo: ${indexFileName}`, error)
    return false
  }
}

export const readIndexFile = async () => {
  return await readFile('./temp/index.txt')
}
