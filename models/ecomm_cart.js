//importing mongoose module
const mongoose = require('mongoose');

//import schema
const schema = mongoose.Schema;
let cartSchema = new schema({
    cartId: {
        type: String,
        unique: true
    },
    productId: {
        type: String,
        unique: true
    },
    productName: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    vendor: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    }

})
mongoose.model('ecomm_cart', cartSchema);