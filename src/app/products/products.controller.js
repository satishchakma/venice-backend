const {
  createProductToDB,
  deleteProductByIdFromDB,
  getAllProductFromDB,
  updateProductByIdToDB,
} = require("./products.service");

const createProduct = async (req, res) => {
  try {
    const product = await createProductToDB(req.body);
    if (product) {
      res
        .status(200)
        .json({ message: "Product added successfully done......" });
    } else {
      res.status(500).json({ message: "Server error " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;
    const modifiedProduct = await updateProductByIdToDB(productId, updatedData);
    if (modifiedProduct.modifiedCount > 0) {
      res.status(200).json({ message: "Product updated successfully" });
    } else if (modifiedProduct.modifiedCount === 0) {
      res.status(404).json({ message: "Not updated" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await deleteProductByIdFromDB(productId);
    if (deletedProduct.deletedCount > 0) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else if (deletedProduct.deletedCount === 0) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await getAllProductFromDB(); // Find all products in the database
    res.status(200).json(products); // Respond with the list of products
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  updateProductById,
  deleteProductById,
  getAllProduct,
};
