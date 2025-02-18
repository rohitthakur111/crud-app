import express from "express"
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controller/ProductController.js";
import { upload } from "../utils/upload.js";

const ProductRouter = express.Router();

ProductRouter.route('/products')
    .get(getProducts)
    .post(upload.single('image'), addProduct)

ProductRouter.route('/products/:id')
    .get(getProduct)
    .put(upload.single('image'), updateProduct)
    .delete(deleteProduct)

export default ProductRouter