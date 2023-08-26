const express = require('express')
const router = express.Router()
const {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
} = require('./products.controller')

router.post('/', createProduct)
router.get('/', getAllProduct)
router.get('/:id', getProductById)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)

module.exports = router