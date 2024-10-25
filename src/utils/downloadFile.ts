import axios from 'axios'
import * as fs from 'fs'

const downloadFile = async (
  url: string,
  destinationFolder: string,
  fileName: string,
): Promise<void> => {
  const response = await axios.get(url, { responseType: 'stream' })
  const writer = fs.createWriteStream(`${destinationFolder}/${fileName}`)

  if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder, { recursive: true })
  }

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

export default downloadFile
