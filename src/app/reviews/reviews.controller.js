const { createReviewToDB } = require("./reviews.service");

const createReview = async (req, res) => {
  try {
    const review = await createReviewToDB(req.body);
    if (review) {
      res.status(200).json({ message: "Review added successfully done......" });
    } else {
      res.status(500).json({ message: "Server error " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createReview,
};
