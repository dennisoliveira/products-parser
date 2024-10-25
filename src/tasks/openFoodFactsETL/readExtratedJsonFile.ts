import * as fs from 'fs'
import * as readline from 'readline'

async function readJsonFileLineByLine(filePath: string) {
  const fileStream = fs.createReadStream(filePath)
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const productsBuffer: object[] = []
  for await (const line of rl) {
    try {
      const productJson = JSON.parse(line)
      console.log(`Objeto JSON: ${productJson.code} | ${productJson.product_name}`)
      productsBuffer.push(productJson)
      if (productsBuffer.length === 5) break
    } catch (error) {
      console.error('Erro ao analisar linha JSON:', error)
    }
  }
}

const filePath = './temp/products_01.json'
readJsonFileLineByLine(filePath)
