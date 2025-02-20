import Product from "../models/ProductSchema.js"
import fs from "fs"
import url from "url"
// Delete image of product
const deleteImage = async (filePath) => {
    console.log(filePath)
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, error => {
            if (error) console.log(error.message)
            else console.log("File deleted")
        })
    }
}

// Add product
export const addProduct = async (req, res) => {
    const { title, description, price, category } = req.body
    if (!title || !description || !price || !category) {
        return res.status(401).json({
            status: false,
            error: "All field are required"
        })
    }
    try {
        if (!req.file)
            return res.status(401).json({
                status: false,
                error: "Product image is required"
            })

        const imageUrl = `products/${req.file.filename}`;

        const product = new Product({ title, description, price, category, imageUrl })

        await product.save();
        return res.status(201).json({
            status: true,
            product,
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
}

// get products list
export const getProducts = async (req, res) => {
    try {
        const parseUrl = url.parse(req.url, true)
        let { currentpage, pagesize, search, category } = parseUrl.query;
        pagesize = Number(pagesize) ? Number(pagesize) : 5

        let matchStage = {};

        if (search)
            matchStage = {
                title: {
                    $regex: search,
                    $options: "i"
                }
            }
        if (category) matchStage = { ...matchStage, category: category }

        const totalProducts = await Product.countDocuments(matchStage)
        const totalPages = Math.ceil(totalProducts / pagesize)

        currentpage = Number(currentpage) && currentpage <= totalPages ? Number(currentpage) : 1
        const skip = (currentpage - 1) * pagesize

        const pipeline = [
            {
                $match: matchStage
            },
            {
                $skip: skip
            },
            {
                $limit: pagesize
            },
            {
                $sort: { price: 1 }
            }
        ];


        const products = await Product.aggregate(pipeline)
        return res.status(201).json({
            status: true,
            products: products,
            currentpage,
            totalProducts,
            totalPages
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
}

//get single product
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findById(id)
        if (!product)
            return res.status(404).json({
                status: true,
                error: "Product not found with that id"
            })
        res.status(200).json({
            status: true,
            product: product
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
}

// Update product
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findById(id)

        if (!product)
            return res.status(404).json({
                status: true,
                error: "Product not found with that id"
            })
        if (req.file) {
            req.body.imageUrl = `products/${req.file.filename}`;
            await deleteImage(`./public/${product.imageUrl}`)
        }
        product = await Product.findByIdAndUpdate(id, { ...req.body }, { new: true, upsert: true })
        res.status(200).json({
            status: true,
            product: product
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
}

//delete product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findById(id)

        if (!product)
            return res.status(404).json({
                status: true,
                error: "Product not found with that id"
            })

        await Product.findByIdAndDelete(id)
        await deleteImage(`./public/${product.imageUrl}`)

        res.status(200).json({
            status: true,
            product: null
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
}