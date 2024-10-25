import downloadFile from '../../utils/downloadFile'
import extratGzipFile from '../../utils/extratGzipFile'
// import readFile from '../../utils/readFile'

export const downloadProductsFiles = async (filesToDownload: string[]) => {
  const productOriginFilePath: string = `https://challenges.coode.sh/food/data/json`
  const productDestinationFolder: string = './temp'

  try {
    filesToDownload.forEach(async (file) => {
      await downloadFile(
        `${productOriginFilePath}/${file}`,
        productDestinationFolder,
        file,
      )
      console.log(`Arquivo ${file} baixado com sucesso!`)
      await extratGzipFile(
        `${productDestinationFolder}/${file}`,
        `${productDestinationFolder}/${file.slice(0, -3)}`,
      )
      console.log(`Arquivo ${file} descompactado com sucesso!`)
    })
    return true
  } catch (error) {
    console.error(`Erro ao baixar arquivo:`, error)
    return false
  }
}

// export const readIndexFile = async () => {
//   console.log(await readFile('./temp/index.txt'))
// }
