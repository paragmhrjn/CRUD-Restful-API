const express = require("express");
const router = express.Router();
const {getProducts, displayProducts, createProducts, updateProducts, deleteProducts} = require("../controller/product.controller");

router.get("/", getProducts);
router.get("/:id", displayProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts)

module.exports = router;