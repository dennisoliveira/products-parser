import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const checkMongoConnectionStatus = () => {
  const state = mongoose.connection.readyState
  switch (state) {
    case 0:
      return 'Desconectado'
    case 1:
      return 'Conectado'
    case 2:
      return 'Conectando'
    case 3:
      return 'Desconectando'
    default:
      return 'Status desconhecido'
  }
}

const mongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default mongodbConnect
