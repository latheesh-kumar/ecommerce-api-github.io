const express = require('express');
const ecommController = require('./../controllers/ecommercecontroller');
const appConfig = require('./../config/config');
const auth = require('./../middleware/auth');

let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/ecommerce';

	app.get(baseUrl + '/all', auth.isAuthenticated, ecommController.getAllProducts);

    /**
	 * @api {get} /api/v1/ecommerce/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
					}
	    		]
	    	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl + '/create', auth.isAuthenticated, ecommController.createProducts);

    /**
	 * @api {post} /api/v1/ecommerce/create Create products
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} categoryName categoryname of the product passed as a body parameter
     * @apiParam {String} subcategoryName subcategoryname of the product passed as a body parameter
     * @apiParam {String} productName productname of the product passed as a body parameter
     * @apiParam {String} productTitle title of the product passed as a body parameter
	 * @apiParam {String} productDescription description of the product passed as a body parameter
	 * @apiParam {String} productType type of the product passed as a body parameter
	 * @apiParam {String} brand brand of the product passed as a body parameter
     * @apiParam {String} color color of the product passed as a body parameter
     * @apiParam {String} images images of the product passed as a body parameter
     * @apiParam {String} price price of the product passed as a body parameter
     * @apiParam {String} models models of the product passed array as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Created successfully",
	    "status": 200,
	    "data": [
					{
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
					}
	    		]
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
	app.get(baseUrl + '/view/by/product/:productId', auth.isAuthenticated, ecommController.viewByProductId);

	/**
	 * @api {get} /api/v1/ecommerce/view/by/product/:productId Get a single product by product Id
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": [
					{
					_id: "string",
					__v: number,
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
				}
			]
	    }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/view/by/category/:categoryId', auth.isAuthenticated, ecommController.viewByCategoryId);

	/**
	 * @api {get} /api/v1/ecommerce/view/by/category/:categoryId Get a single product category by categoryid
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} categoryId The categoryId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "category Found Successfully.",
	    "status": 200,
	    "data": [ 
					{
					_id: "string",
					__v: number,
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
				}
			]
	    }

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/view/by/categoryname/:categoryName', auth.isAuthenticated, ecommController.viewByCategoryName);
	/**
	 * @api {get} /api/v1/ecommerce/view/:categoryName Get a single product by CategoryName 
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} categoryName The categoryname should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "category Found Successfully.",
	    "status": 200,
	    "data": [
					{
					_id: "string",
					__v: number,
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
				}
			]
	    }
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */
	app.put(baseUrl + '/:productId/edit', auth.isAuthenticated, ecommController.editProduct);

	/**
	 * @api {put} /api/v1/ecommerce/:productId/edit Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
					categoryId: "string",
					categoryName: "string",
					subCategoryId:"string",
					subCategoryName:"string",
					productId:"string",
					productName:"string",
					productTitle: "string",
					productDescription: "string",
					productType : "string",
					vendor : string,
					brand : string,
					color : string,
					images: "string",
					price: number,
					models: object(type = array),
					created: "date",
					lastModified: "date"
					}
	    		]
	    	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl + '/:productId/delete', auth.isAuthenticated, ecommController.deleteProduct);
	/**
	 * @api {post} /api/v1/ecommerce/:productId/delete Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
	app.post(baseUrl + '/addtocart', auth.isAuthenticated, ecommController.addToCart);

	/**
	 * @api {post} /api/v1/ecommerce/addtocart Create carts
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} productName productname of the product passed as a body parameter
	 * @apiParam {String} qunatity quantity of the product passed as a body parameter
     * @apiParam {String} price price of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product added to cart successfully",
	    "status": 200,
	    "data": [
					{
					cartId: "string",
					productId:"string",
					productName:"string",
					vendor : string,
					Quantity : number,
					price: number,
					created: "date"
					}
	    		]
	    	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
	app.get(baseUrl + '/listcart', auth.isAuthenticated, ecommController.getAllCarts);

	/**
	* @api {get} /api/v1/ecommerce/listcart Get all cart list
	* @apiVersion 0.0.1
	* @apiGroup read
	*
	* @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "message": "All Product Details Found",
	   "status": 200,
	   "data": [
				   {
					cartId: "string",
					productId:"string",
					productName:"string",
					vendor : string,
					Quantity : number,
					price: number,
					created: "date"
				   }
			   ]
		   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Failed To Find cart Details",
	   "status": 500,
	   "data": null
	  }
	*/

	app.post(baseUrl + '/:productId/removecart', auth.isAuthenticated, ecommController.deleteFromCart);
	/**
	 * @api {post} /api/v1/ecommerce/:productId/removecart Delete product by cartId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartId cartId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Cart Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
	app.get(baseUrl + '/:cartId/count/quantity', auth.isAuthenticated, ecommController.increaseProductQuantity);
    /**
	 * @api {get} /api/v1/ecommerce/:cartId/count/quantity Increase Product Quantity Count
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartId cartId of the cart passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Cart Updated Successfully.",
	    "status": 200,
	    "data": [
					{
					cartId: "string",
					productId:"string",
					productName:"string",
					vendor : string,
					Quantity : number,
					price: number,
					created: "date"
					}
	    		]
	    	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

}

module.exports = {
	setRouter: setRouter
}