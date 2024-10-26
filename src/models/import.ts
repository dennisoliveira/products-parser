import mongoose, { Document, Schema } from 'mongoose'

export interface IImport extends Document {
  imported_t: Date
  result: object
}

const importSchema: Schema = new Schema({
  imported_t: { type: Date, required: true },
  result: { type: Object, required: false },
})

const Import = mongoose.model<IImport>('Import', importSchema)

export default Import
