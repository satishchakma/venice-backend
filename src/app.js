const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const Product = require('./app/products/products')

app.use(cors());
app.use(express.json());

// Route to add a new product
app.post('/products', async( req, res ) => {
  try{
    const product = new Product(req.body)  // Create a new product instance based on the request body
    await product.save() // Save the product instance to the database
    res.status(200).json({ message: "Product added successfully done......" })
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
})

// Route to get all products
app.get('/products', async(req, res) => {
  try{
    const products = await Product.find() // Find all products in the database
    res.status(200).json(products) // Respond with the list of products
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
})

// Route to delete a product by ID
app.delete('/products/:id', async(req, res) => {
  try{
    const productId = req.params.id
    const deletedProduct = await Product.deleteOne({ _id: productId }) // Delete the product based on the ID
    if(deletedProduct.deletedCount > 1) {
      res.status(200).json({ message: "Product deleted successfully"});
    } else if(deletedProduct.deletedCount === 0 ) {
      res.status(404).json({ message: "Product not found"});
    } else {
      res.status(500).json({ message: "Server error" })
    }
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
})

// Route to update a product by ID
app.put('/products/:id', async(req, res) => {
  try{
    const productId = req.params.id
    const updatedData = req.body
    const modifiedProduct = await Product.updateOne(
      { _id: productId }, 
      { $set: { ...updatedData }, 'timestamps.updatedAt': new Date() } // Update the product based on the ID and updated data
    )
    if(modifiedProduct.modifiedCount > 0 ) {
      res.status(200).json({ message: "Product updated successfully"});
    } else if(modifiedProduct.modifiedCount === 0 ) {
      res.status(404).json({ message: "Not updated"});
    } else {
      res.status(500).json({ message: "Server error" })
    }
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
})


module.exports = app;
