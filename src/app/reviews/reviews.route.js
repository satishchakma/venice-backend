const express = require("express");
const router = express.Router();
const { createReview } = require("./reviews.controller");

router.post("/", createReview);

module.exports = router;
