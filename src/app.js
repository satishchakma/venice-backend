const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
