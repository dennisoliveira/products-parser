import * as fs from 'fs'
import * as readline from 'readline'

async function readFileLineByLine(filePath: string, isJson: boolean = false) {
  const fileStream = fs.createReadStream(filePath)
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const productsBuffer: object[] = []
  for await (const line of rl) {
    try {
      if (isJson) {
        const productJson = JSON.parse(line)
        console.log(
          `Objeto JSON: ${productJson.code} | ${productJson.product_name}`,
        )
        productsBuffer.push(productJson)
        if (productsBuffer.length === 5) break
      } else {
        console.log(line)
      }
    } catch (error) {
      console.error('Erro ao analisar linha JSON:', error)
    }
  }
}

const filePath1 = './temp/index.txt'
readFileLineByLine(filePath1)

const filePath2 = './temp/products_01.json'
readFileLineByLine(filePath2, true)
