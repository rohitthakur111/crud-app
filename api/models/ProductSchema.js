import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, "Product title is requiredd"]
    },
    description: {
        type: String,
        required: [true, "Product description is requiredd"]
    },
    price: {
        type: Number,
        required: [true, "Product price is requiredd"]
    },
    currency: {
        type: String,
        required: [true, "Product currency is requiredd"]
    },
    category: {
        type: String,
        required: [true, "Product category is requiredd"]
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema, 'products')

export default Product;