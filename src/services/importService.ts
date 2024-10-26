import Import, { IImport } from '../models/import'

export const createImport = async (result: object): Promise<IImport> => {
  const producsImport: IImport = new Import({
    imported_t: Date(),
    result,
  })
  return await producsImport.save()
}

export const getLastedImport = async (): Promise<IImport | null | any> => {
  try {
    const lastInserted = await Import.findOne().sort({ _id: -1 })
    return lastInserted
  } catch (error) {
    console.error('Erro ao buscar última importação:', error)
  }
}

export default {
  createImport,
  getLastedImport,
}
