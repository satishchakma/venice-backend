const { createReviewToDB } = require("./reviews.service");

const createReview = async (req, res) => {
  console.log(req.body);
  try {
    const review = await createReviewToDB(req.body);
    console.log(review);
    if (review) {
      res.status(200).json({ message: "Review added successfully done......" });
    } else {
      res.status(500).json({ message: "Server error " });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
};
