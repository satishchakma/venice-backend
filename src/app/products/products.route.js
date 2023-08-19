const express = require('express')
const router = express.Router()
const {
    createProduct,
    updateProductById,
    deleteProductById,
    getAllProduct
} = require('./products.controller')

router.get('/', getAllProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProductById)
router.put('/:id', updateProductById)

module.exports = router