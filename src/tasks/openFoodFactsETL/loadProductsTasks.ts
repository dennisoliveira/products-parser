import elasticsearchConnect from '../../config/elasticsearch-connect'
import Product from '../../models/product'

export const loadToElasticsearch = async (index: string, data: Array<any>) => {
  const body = data.flatMap((product) => [
    { index: { _index: index, _id: product.code } },
    product,
  ])
  return await elasticsearchConnect.bulk({ refresh: true, body })
}

export const loadToMongodb = async (data: Array<any>) => {
  const bulkOpsMongodb = data.map((product) => {
    return {
      updateOne: {
        filter: { code: product.code },
        update: { $set: product },
        upsert: true,
      },
    }
  })
  return await Product.bulkWrite(bulkOpsMongodb)
}
