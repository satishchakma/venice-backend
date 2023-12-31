const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  //add user id and product id later
  //   user_id: {type: Schema.Types.ObjectId},
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
  rating: { type: Number, default: 0, required: true, min: 1, max: 5 },
  review_text: { type: String, required: true },
  review_timestamp: {
    createdAt: { type: Date, default: Date.now(), immutable: true },
    updatedAt: { type: Date, default: Date.now() },
  },
});

module.exports = mongoose.model("Review", reviewSchema);

//- user_id (Reference to User)
// - product_id (Reference to Product)
// - rating (Number)
// - review_text (String)
// - review_timestamp (Date)
