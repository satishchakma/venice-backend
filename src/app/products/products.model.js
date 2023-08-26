const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = mongoose.Schema({
    title: { type: String, required: true, minLength: 10, maxLength: 65 },
    description: { type: String },
    price: {
        cost_price: { type: Number, required: true, min: 1 },
        sell_price: { type: Number, required: true, min: 1 },
        offer_price: { type: Number, min: 1 }
    },
    status: { type: String, enum: [ "In Stock", "Out of Stock" ] },
    quantity: { type: Number, default: 0 },
    images: { 
        featured_image : { type: String },
        media_image: { type: [String], default: undefined }
    },
    // category_id: { type: Schema.Types.ObjectsId, default: undefined },
    // rating: { type: Number, default: 0 },
    reviews: { type: [ Schema.Types.ObjectsId ], default: undefined, ref: 'Review' },
    timestamps: {
        createdAt: { type: Date, default: Date.now(), immutable: true },
        updatedAt: { type: Date, default: Date.now() },
    },
})

module.exports = mongoose.model('Product', productSchema)