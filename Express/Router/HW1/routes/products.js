const express = require("express");
const router = express.Router();
const data = require("../data/data");

// GET: /api/products
router.get("/", (req, res) => {
  res.json({ products: data.products });
});

// GET: get products by id (path param)  /api/products/{id}
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = data.products.find((item) => item.id === parseInt(id));
  if (product) res.json(product);
  else res.status(404).json({ message: `Product with ID: ${id} not found` });
});

// POST: add products (body data)   /api/products/{id}
router.post("/", (req, res) => {
  const productData = req.body;

  // Check required fields
  if (!productData.name || !productData.price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  // Check if ID already exists
  const existingProduct = data.products.find((p) => p.id === productData.id);
  if (existingProduct) {
    return res
      .status(400)
      .json({ message: "Product with this ID already exists" });
  }

  // Validate price > 0
  if (productData.price <= 0) {
    return res.status(400).json({ message: "Price must be greater than 0" });
  }

  // Validate stock is positive (if provided)
  if (productData.stock !== undefined && productData.stock < 0) {
    return res.status(400).json({ message: "Stock must be a positive number" });
  }

  data.products.push(productData);
  res.json({ message: "Product added", products: data.products });
});

// PUT: update products by id (path param + body data)   /api/products/{id}
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const productData = req.body;

  // Validate price > 0 (if provided)
  if (productData.price !== undefined && productData.price <= 0) {
    return res.status(400).json({ message: "Price must be greater than 0" });
  }

  // Validate stock is positive (if provided)
  if (productData.stock !== undefined && productData.stock < 0) {
    return res.status(400).json({ message: "Stock must be a positive number" });
  }

  const productInd = data.products.findIndex(
    (item) => item.id === parseInt(id)
  );

  if (productInd !== -1) {
    data.products[productInd] = productData;
    res.json({
      message: `Product with ID: ${id} updated`,
      products: data.products,
    });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE: delete product by id   /api/products/{id}
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const productInd = data.products.findIndex(
    (item) => item.id === parseInt(id)
  );

  if (productInd !== -1) {
    //delete product into array
    data.products.splice(productInd, 1);
    res.json({
      message: `Product with ID: ${id} deleted`,
      products: data.products,
    });
  } else {
    res.status(404).json({ message: `Product not found` });
  }
});
module.exports = router;
