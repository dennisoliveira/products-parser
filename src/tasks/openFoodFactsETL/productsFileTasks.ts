import downloadFile from '../../utils/downloadFile'
import extratGzipFile from '../../utils/extratGzipFile'
// import readFile from '../../utils/readFile'

export const downloadProductsFiles = async (filesToDownload: string[]) => {
  const productOriginFilePath: string = `https://challenges.coode.sh/food/data/json`
  const productDestinationFolder: string = './temp'

  try {
    const downloadPromises = filesToDownload.map((file) => {
      console.log(`Arquivo ${file} iniciando download!`)
      return downloadFile(
        `${productOriginFilePath}/${file}`,
        productDestinationFolder,
        file,
      )
    })
    await Promise.all(downloadPromises)
    console.log(`Arquivos baixados com sucesso!`)

    const extratPromises = filesToDownload.map((file) => {
      console.log(`Arquivo ${file} iniciando descompactação!`)
      return extratGzipFile(
        `${productDestinationFolder}/${file}`,
        `${productDestinationFolder}/${file.slice(0, -3)}`,
      )
    })
    await Promise.all(extratPromises)
    console.log(`Arquivos descompactados com sucesso!`)
    return true
  } catch (error) {
    console.error(`Erro ao baixar arquivo:`, error)
    return false
  }
}

// export const readIndexFile = async () => {
//   console.log(await readFile('./temp/index.txt'))
// }
