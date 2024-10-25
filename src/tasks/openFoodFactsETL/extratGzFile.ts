import * as fs from 'fs'
import * as zlib from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

async function extractGzip(
  inputFile: string,
  outputFile: string,
): Promise<void> {
  const input = fs.createReadStream(inputFile)
  const output = fs.createWriteStream(outputFile)
  const unzip = zlib.createGunzip()

  try {
    await pipelineAsync(input, unzip, output)
    console.log(`Arquivo descompactado com sucesso para ${outputFile}`)
  } catch (error) {
    console.error('Erro ao descompactar o arquivo:', error)
  }
}

extractGzip('./temp/products_01.json.gz', './temp/products_01.json')
