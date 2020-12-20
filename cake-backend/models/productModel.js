import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
    },
    countInstock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
export default Product
