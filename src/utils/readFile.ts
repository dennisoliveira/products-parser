import * as fs from 'fs'
import * as readline from 'readline'

const readFile = async (filePath: string, lineLimit: number | null = null) => {
  const fileStream = fs.createReadStream(filePath)
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const lineBuffer: any[] = []

  for await (const line of rl) {
    try {
      if (lineLimit && lineBuffer.length === lineLimit) {
        break
      } else {
        lineBuffer.push(line)
      }
    } catch (error) {
      console.error('Erro ao ler o arquivo', error)
    }
  }

  return lineBuffer
}

export default readFile
