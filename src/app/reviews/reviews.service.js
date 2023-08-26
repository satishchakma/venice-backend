const Review = require("./reviews.model");
const Product = require("../products/products.model");

const createReviewToDB = async (data) => {
  const query = new Review(data); // Create a new review instance based on the request body
  const review = await query.save(); // Save the review instance to the database
  await Product.findByIdAndUpdate(
    { _id: data.product_id },
    { "$push": { "reviews": review._id } }
  )
  return review;
};

// const deleteProductByIdFromDB = async (id) => {
//   const deletedProduct = await Product.deleteOne({ _id: id }); // Delete the product based on the ID
//   return deletedProduct;
// };

// const getAllProductFromDB = async () => {
//   const products = await Product.find();
//   return products;
// };

// const updateProductByIdToDB = async (id, updatedData) => {
//   const modifiedProduct = await Product.updateOne(
//     { _id: id },
//     { $set: { ...updatedData }, "timestamps.updatedAt": new Date() } // Update the product based on the ID and updated data
//   );
//   return modifiedProduct;
// };

module.exports = {
  createReviewToDB,
  //   deleteProductByIdFromDB,
  //   getAllProductFromDB,
  //   updateProductByIdToDB,
};
