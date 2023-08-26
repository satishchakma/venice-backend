const Reviews = require("./reviews.model");

const createReviewToDB = async (data) => {
  const review = new Review(data); // Create a new review instance based on the request body
  await Review.save(); // Save the review instance to the database
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
