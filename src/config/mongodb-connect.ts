import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB conectado')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default mongodbConnect
