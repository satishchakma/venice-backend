const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const productRouter = require('./app/products/products.route')
const userRouter = require('./app/users/users.route')
const reviewRouter = require('./app/reviews/reviews.route')

app.use(cors());
app.use(express.json());

app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/reviews', reviewRouter)

module.exports = app;


// MVC / MVT
// n layer architecture / modular architecture

// Request Sender ====> app config layer ====> router layer ====> controller layer ====> service layer