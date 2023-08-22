const Product = require('./products.model')

const createProductToDB = async(data) => {
    const product = new Product(data)  // Create a new product instance based on the request body
    await product.save() // Save the product instance to the database
}

const getAllProductFromDB = async() => {
    const products = await Product.find()
    return products
}

const getProductByIdFromDB = async(id) => {
    const product = Product.findOne({ _id: id })
    return product
}

const getProductByFilterFromDB = async(filterProperty) => {
    const products = await Product.find().where('price.sell_price').gte(filterProperty.price_from).lte(filterProperty.price_to).exec()
    return products
}

const updateProductByIdToDB = async( id, updatedData ) => {
    const modifiedProduct = await Product.updateOne(
        { _id: id }, 
        { $set: { ...updatedData }, 'timestamps.updatedAt': new Date() } // Update the product based on the ID and updated data
      )
      return modifiedProduct
}

const deleteProductByIdFromDB = async(id) => {
    const deletedProduct = await Product.deleteOne({ _id: id }) // Delete the product based on the ID
    return deletedProduct
}

module.exports = {
    createProductToDB,
    getAllProductFromDB,
    getProductByIdFromDB,
    getProductByFilterFromDB,
    updateProductByIdToDB,
    deleteProductByIdFromDB,
}