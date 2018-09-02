const express = require('express');
const mongoose = require('mongoose');
require('./../models/ecomm_model');
require('./../models/ecomm_cart');
const shortid = require('shortid');
const response = require('./../libs/responseLib');
const check = require('./../libs/checkLib');
const eModel = mongoose.model('ecomm_model');
const eCart = mongoose.model('ecomm_cart');
const logger = require('./../libs/loggerLib');
const time = require('./../libs/timeLib');


/*
* function to list all products
*/
let getAllProducts = (req, res) => {
    eModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'Ecommerce Controller: getAllProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Products Found', 'Ecommerce Controller: getAllProducts')
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Products Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all products


/*
    * function to create products
*/
let createProducts = (req, res) => {
    let productCreation = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.categoryName) || check.isEmpty(req.body.productTitle) || check.isEmpty(req.body.price) || check.isEmpty(req.body.brand)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            }
            else {
                var today = time.convertToLocalTime();
                let productId = shortid.generate();
                let categoryId = shortid.generate();
                let subcategoryId = shortid.generate();
                let newProduct = new eModel({
                    categoryId: categoryId,
                    productId: productId,
                    subCategoryId: subcategoryId,
                    skuId: req.body.skuId,
                    categoryName: req.body.categoryName,
                    subCategoryName: req.body.subCategoryName,
                    productName: req.body.productName,
                    productTitle: req.body.productTitle,
                    productDescription: req.body.productDescription,
                    productType: req.body.productType,
                    vendor: req.body.vendor,
                    brand: req.body.brand,
                    color: req.body.color,
                    images: req.body.images,
                    price: req.body.price,
                    created: today,
                    lastModified: today
                })
                let models = (req.body.models != undefined && req.body.models != null && req.body.models != '') ? req.body.models.split(',') : []
                newProduct.models = models
                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Failed To Create Products', 500, null)
                        reject(apiResponse)
                    }
                    else {
                        let apiResponse = response.generate(false, 'Products Created', 200, result)
                        resolve(apiResponse)
                    }
                }) // end new product
            }
        })
    }// end product promise

    // making promise call.
    productCreation()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}
//end product creation

/*
* Function view by product
*/

let viewByProductId = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        console.log('ProductId should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse)
    }
    else {
        eModel.findOne({ 'productId': req.params.productId }, (err, result) => {
            if (err) {

                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'Products Found', 200, result)
                res.send(apiResponse)
            }
        })
    }

}

/*
* Function view by category
*/
let viewByCategoryId = (req, res) => {
    if (check.isEmpty(req.params.categoryId)) {

        console.log('categoryId should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse)
    }
    else {
        eModel.findOne({ 'categoryId': req.params.categoryId }, (err, result) => {

            if (err) {
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'Products Found', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/*
* Function view by categoryName
*/
let viewByCategoryName = (req, res) => {
    if (check.isEmpty(req.params.categoryName)) {

        console.log('categoryName should be passed')
        let apiResponse = response.generate(true, 'CategoryName is missing', 403, null)
        res.send(apiResponse)
    } else {

        eModel.findOne({ 'categoryName': req.params.categoryName }, (err, result) => {
            if (err) {
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'Products Found', 200, result)
                res.send(apiResponse)
            }
        })
    }
}
/**
 * function to edit product
 */
let editProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        console.log('ProductId should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse)
    }
    else {

        let options = req.body;
        console.log(options);
        eModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

            if (err) {
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'Product Updated Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to delete the collection.
 */
let deleteProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        console.log('ProductId should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse)
    }
    else {
        eModel.remove({ 'productId': req.params.productId }, (err, result) => {
            if (err) {
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let getAllCarts = (req, res) => {
    eCart.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                console.log("No Products");
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, 'All Carts Details', 200, result)
                res.send(apiResponse)
            }
        })
}

/*
    * function to Add products in cart
*/
let addToCart = (req, res) => {
    var today = Date.now()
    let cartId = shortid.generate();
    let productId = shortid.generate();
    let addCart = new eCart({
        cartId: cartId,
        productId: productId,
        productName: req.body.productName,
        vendor: req.body.vendor,
        price: req.body.price,
        created: today
    })
    addCart.save((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To Create Products', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Added in the cart', 200, result)
            res.send(apiResponse)
        }
    }) // end to adding cart
}

/**
 * function to delete the cart.
 */
let deleteFromCart = (req, res) => {
    if (check.isEmpty(req.params.cartId)) {

        console.log('cartId should be passed')
        let apiResponse = response.generate(true, 'cartId is missing', 403, null)
        res.send(apiResponse)
    } else {
    
    eCart.remove({ 'cartId': req.params.cartId }, (err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To Find Products Found', 500, null)
            res.send(apiResponse)
        }
        else if (check.isEmpty(result)) {
            console.log("No Products");
            let apiResponse = response.generate(true, 'No Products Found', 404, null)
            res.send(apiResponse)
        }
        else {
            let apiResponse = response.generate(false, 'Product Removed from the Cart', 200, result)
            res.send(apiResponse)
        }
    })
}
}

/**
 * function to increase quantity of a product.
 */
let increaseProductQuantity = (req, res) => {
    
    if (check.isEmpty(req.params.cartId)) {

        console.log('cartId should be passed')
        let apiResponse = response.generate(true, 'cartId is missing', 403, null)
        res.send(apiResponse)
    } else {

        eCart.findOne({ 'cartId': req.params.cartId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Cart Not Found.')
                let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                res.send(apiResponse)
            } else {
                result.quantity += 1;
                result.save(function(err,result){
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving cart', 500, null)
                        res.send(apiResponse)
                    }
                    else{
                        console.log('Cart Updated Successfully')
                        let apiResponse = response.generate(false, 'Cart Updated Successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
                
            }
        })
    }
}


module.exports = {
    getAllProducts: getAllProducts,
    createProducts: createProducts,
    viewByProductId: viewByProductId,
    viewByCategoryId: viewByCategoryId,
    viewByCategoryName: viewByCategoryName,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    addToCart: addToCart,
    deleteFromCart: deleteFromCart,
    getAllCarts: getAllCarts,
    increaseProductQuantity:increaseProductQuantity
}