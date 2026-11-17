
import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"


// ADD PRODUCT
export const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, subCategory, sizes, bestseller } = req.body

        let image1 = await uploadOnCloudinary(req.files.image1[0].path)
        let image2 = await uploadOnCloudinary(req.files.image2[0].path)
        let image3 = await uploadOnCloudinary(req.files.image3[0].path)
        let image4 = await uploadOnCloudinary(req.files.image4[0].path)

        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true",
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        }

        const product = await Product.create(productData)

        return res.status(201).json(product)

    } catch (error) {
        console.log("AddProduct error:", error)
        return res.status(500).json({ message: `AddProduct error ${error.message}` })
    }
}


// LIST PRODUCT
export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        return res.status(200).json(product)

    } catch (error) {
        console.log("ListProduct error:", error)
        return res.status(500).json({ message: `ListProduct error ${error.message}` })
    }
}


// REMOVE PRODUCT
export const removeProduct = async (req, res) => {
    try {
        let { id } = req.params

        const product = await Product.findByIdAndDelete(id)

        return res.status(200).json(product)

    } catch (error) {
        console.log("RemoveProduct error:", error)
        return res.status(500).json({ message: `RemoveProduct error ${error.message}` })
    }
}


// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller
        } = req.body

        let image1 = product.image1
        let image2 = product.image2
        let image3 = product.image3
        let image4 = product.image4

        if (req.files?.image1?.[0]) {
            image1 = await uploadOnCloudinary(req.files.image1[0].path)
        }

        if (req.files?.image2?.[0]) {
            image2 = await uploadOnCloudinary(req.files.image2[0].path)
        }

        if (req.files?.image3?.[0]) {
            image3 = await uploadOnCloudinary(req.files.image3[0].path)
        }

        if (req.files?.image4?.[0]) {
            image4 = await uploadOnCloudinary(req.files.image4[0].path)
        }

        const updatedData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true",
            image1,
            image2,
            image3,
            image4
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        })

    } catch (error) {
        console.log("UpdateProduct error:", error)
        return res.status(500).json({
            message: "UpdateProduct error",
            error: error.message
        })
    }
}
