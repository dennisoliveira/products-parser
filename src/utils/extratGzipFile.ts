import * as fs from 'fs'
import * as zlib from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

const extratGzipFile = async (
  inputFile: string,
  outputFile: string,
): Promise<void> => {
  const input = fs.createReadStream(inputFile)
  const output = fs.createWriteStream(outputFile)
  const unzip = zlib.createGunzip()

  try {
    await pipelineAsync(input, unzip, output)
  } catch (error) {
    console.error(`Erro ao descompactar o arquivo ${outputFile}:`, error)
  }
}

export default extratGzipFile
