import axios from 'axios'
import * as fs from 'fs'

async function downloadFile(
  url: string,
  destinationPath: string,
): Promise<void> {
  const response = await axios.get(url, { responseType: 'stream' })
  const writer = fs.createWriteStream(destinationPath)

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

downloadFile(
  'https://challenges.coode.sh/food/data/json/index.txt',
  './temp/index.txt',
)
  .then(() => console.log('Arquivo baixado com sucesso!'))
  .catch((error) => console.error('Erro ao baixar arquivo:', error))

downloadFile(
  'https://challenges.coode.sh/food/data/json/products_01.json.gz',
  './temp/products_01.json.gz',
)
  .then(() => console.log('Arquivo baixado com sucesso!'))
  .catch((error) => console.error('Erro ao baixar arquivo:', error))
