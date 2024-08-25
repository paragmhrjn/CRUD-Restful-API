const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello from Node API Server");
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
            }
});

app.get ("/api/product/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(product);
            } catch (error) {
                res.status(500).json({ message: error.message });
                }
})

app.post("/api/products",async (req, res) => {
    // to setup data to be stored
    try{
       const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// mongodb connection
mongoose.connect("mongodb+srv://chandraparag:ocL54Z00LaAQjzLc@crud-restful.oc28p.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Crud-restful")
.then(() =>{
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
.catch(()=>{
    console.log("Error connecting to MongoDB");
}
)