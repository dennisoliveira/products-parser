import downloadFile from '../../utils/downloadFile'
import extratGzipFile from '../../utils/extratGzipFile'
import readFile from '../../utils/readFile'

export const downloadProductsFiles = async (filesToDownload: string[]) => {
  const productOriginFilePath: string = `https://challenges.coode.sh/food/data/json`
  const productDestinationFolder: string = './temp'

  try {
    const downloadPromises = filesToDownload.map((file) => {
      return downloadFile(
        `${productOriginFilePath}/${file}`,
        productDestinationFolder,
        file,
      )
    })
    await Promise.all(downloadPromises)
    console.log(`Arquivos baixados com sucesso!`)

    const extratedFiles: string[] = []
    const extratPromises = filesToDownload.map((file) => {
      const extratedFileName = file.slice(0, -3)
      console.log(`Arquivo ${file} iniciando descompactação!`)
      extratedFiles.push(extratedFileName)
      return extratGzipFile(
        `${productDestinationFolder}/${file}`,
        `${productDestinationFolder}/${extratedFileName}`,
      )
    })
    await Promise.all(extratPromises)
    console.log(`Arquivos descompactados com sucesso!`)
    return extratedFiles
  } catch (error) {
    console.error(`Erro ao baixar arquivo:`, error)
    throw error
  }
}

export const readProductsFiles = async (
  filesToRead: string[],
  lineLimit: number = 10,
) => {
  const products: any[] = []
  const filePath: string = './temp'
  const filesToReadPromises = filesToRead.map(async (file) => {
    const productsReaded = await readFile(`${filePath}/${file}`, lineLimit)
    productsReaded.map((product) => {
      const productObj = JSON.parse(product)
      products.push({
        code: productObj.code.replace(/\D/g, ''),
        status: productObj.status,
        imported_t: Date(),
        product_name: productObj.product_name,
      })
    })
  })
  await Promise.all(filesToReadPromises)
  return products
}
