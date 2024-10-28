import downloadFile from '../../utils/downloadFile'
import extratGzipFile from '../../utils/extratGzipFile'
import readFile from '../../utils/readFile'

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
    console.log(`Lendo arquivo ${file}`)
    const productsReaded = await readFile(`${filePath}/${file}`, lineLimit)
    productsReaded.map((product) => {
      const productObj = JSON.parse(product)
      products.push({
        code: productObj.code.replace(/\D/g, ''),
        status: 'published',
        imported_t: new Date().toISOString(),
        product_name: productObj.product_name,
        url: productObj.url,
        creator: productObj.creator,
        created_t: new Date(parseInt(productObj.created_t) * 1000),
        last_modified_t: new Date(parseInt(productObj.last_modified_t) * 1000),
        quantity: productObj.quantity,
        brands: productObj.brands,
        categories: productObj.categories,
        labels: productObj.labels,
        cities: productObj.cities,
        purchase_places: productObj.purchase_places,
        stores: productObj.stores,
        ingredients_text: productObj.ingredients_text,
        traces: productObj.traces,
        serving_size: productObj.serving_size,
        serving_quantity: productObj.serving_quantity,
        nutriscore_score: productObj.nutriscore_score,
        nutriscore_grade: productObj.nutriscore_grade,
        main_category: productObj.main_category,
        image_url: productObj.image_url,
      })
    })
  })
  await Promise.all(filesToReadPromises)
  console.log(`Arquivos lidos com sucesso!`)
  return products
}
