const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//hello from the other side
//hello from inside
app.get("/orders", (req, res) => {
  res.send("get your orders today!");
});
module.exports = app;
