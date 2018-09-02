//importing mongoose module
const mongoose = require('mongoose');

//import schema
const schema = mongoose.Schema;
let ecommSchema = new schema(
    {
        categoryId : {
            type : String,
            unique : true
        },
        categoryName : {
            type : String,
            default : ''
        },
        subCategoryId : {
            type : String,
            unique : true
        },
        subCategoryName: {
            type : String,
            default : ''
        },
        productId : {
            type : String,
            unique : true
        },
        productName : {
            type : String,
            default : ''
        },
        productTitle : {
            type : String,
            default : ''
        },
        
        productDescription : {
            type : String,
            default : ''
        },
        productType : {
            type : String,
            default : ''
        },
        vendor : {
            type : String,
            default : ''
        },
        brand : {
            type : String,
            default : ''
        },
        color :{
            type : String,
            default : ''
        },
        skuId : {
            type : String,
            default : ''
        },
        models : [],
        images : {
            type : String,
            default : ''
        },
        price  : {
            type : Number,
            default : 0
        },
        created : {
            type: Date,
            default: Date.now
        }, 
        lastModified : {
            type: Date,
            default: Date.now
        }   
    }
)
mongoose.model('ecomm_model',ecommSchema);
