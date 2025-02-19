import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, "Product title is required"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"]
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema, 'products')

export default Product;