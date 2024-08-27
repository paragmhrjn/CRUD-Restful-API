
const Product = require("../models/product.model.js");
// display a stored product data
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// to read particular items
const displayProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// to create a product
const createProducts = async (req, res) => {
    // to setup data to be stored
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a product
const updateProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete a product
const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    displayProducts, 
    createProducts,
    updateProducts,
    deleteProducts
}