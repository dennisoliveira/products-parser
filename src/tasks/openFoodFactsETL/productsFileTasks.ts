import downloadFile from '../../utils/downloadFile'
// import readFile from '../../utils/readFile'

export const downloadProductsFiles = async (filesToDownload: string[]) => {
  const productOriginFile: string = `https://challenges.coode.sh/food/data/json/${filesToDownload[0]}`
  const productDestinationFolder: string = './temp'
  const productFileName: string = filesToDownload[0]
  try {
    await downloadFile(
      productOriginFile,
      productDestinationFolder,
      productFileName,
    )
    console.log(`Arquivo ${productFileName} baixado com sucesso!`)
    return true
  } catch (error) {
    console.error(`Erro ao baixar arquivo: ${productFileName}`, error)
    return false
  }
}

// export const readIndexFile = async () => {
//   console.log(await readFile('./temp/index.txt'))
// }
