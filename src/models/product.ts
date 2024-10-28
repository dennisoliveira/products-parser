import mongoose, { Document, Schema } from 'mongoose'

// {
//     "code": 20221126,
//     "status": "published",
//     "imported_t": "2020-02-07T16:00:00Z",
//     "url": "https://world.openfoodfacts.org/product/20221126",
//     "creator": "securita",
//     "created_t": 1415302075,
//     "last_modified_t": 1572265837,
//     "product_name": "Madalenas quadradas",
//     "quantity": "380 g (6 x 2 u.)",
//     "brands": "La Cestera",
//     "categories": "Lanches comida, Lanches doces, Biscoitos e Bolos, Bolos, Madalenas",
//     "labels": "Contem gluten, Contém derivados de ovos, Contém ovos",
//     "cities": "",
//     "purchase_places": "Braga,Portugal",
//     "stores": "Lidl",
//     "ingredients_text": "farinha de trigo, açúcar, óleo vegetal de girassol, clara de ovo, ovo, humidificante (sorbitol), levedantes químicos (difosfato dissódico, hidrogenocarbonato de sódio), xarope de glucose-frutose, sal, aroma",
//     "traces": "Frutos de casca rija,Leite,Soja,Sementes de sésamo,Produtos à base de sementes de sésamo",
//     "serving_size": "madalena 31.7 g",
//     "serving_quantity": 31.7,
//     "nutriscore_score": 17,
//     "nutriscore_grade": "d",
//     "main_category": "en:madeleines",
//     "image_url": "https://static.openfoodfacts.org/images/products/20221126/front_pt.5.400.jpg"
// }

export interface IProduct extends Document {
  code: string
  status: string
  imported_t: Date
  product_name: string
  url: string
  creator: string
  created_t: Date
  last_modified_t: Date
  quantity: string
  brands: string
  categories: string
  labels: string
  cities: string
  purchase_places: string
  stores: string
  ingredients_text: string
  traces: string
  serving_size: string
  serving_quantity: number
  nutriscore_score: number
  nutriscore_grade: string
  main_category: string
  image_url: string
}

const productSchema = new Schema<IProduct>({
  code: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  imported_t: { type: Date, required: true },
  product_name: { type: String, required: true },
  url: { type: String, required: false },
  creator: { type: String, required: false },
  created_t: { type: Date, required: false },
  last_modified_t: { type: Date, required: false },
  quantity: { type: String, required: false },
  brands: { type: String, required: false },
  categories: { type: String, required: false },
  labels: { type: String, required: false },
  cities: { type: String, required: false },
  purchase_places: { type: String, required: false },
  stores: { type: String, required: false },
  ingredients_text: { type: String, required: false },
  traces: { type: String, required: false },
  serving_size: { type: String, required: false },
  serving_quantity: { type: Number, required: false },
  nutriscore_score: { type: Number, required: false },
  nutriscore_grade: { type: String, required: false },
  main_category: { type: String, required: false },
  image_url: { type: String, required: false },
})

const Product = mongoose.model<IProduct>('Product', productSchema)

export default Product
