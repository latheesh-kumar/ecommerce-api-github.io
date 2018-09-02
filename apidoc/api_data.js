define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecommerce/addtocart",
    "title": "Create carts",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productname of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qunatity",
            "description": "<p>quantity of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product added to cart successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tcartId: \"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tQuantity : number,\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "create",
    "name": "PostApiV1EcommerceAddtocart"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/create",
    "title": "Create products",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>categoryname of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": "<p>subcategoryname of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productname of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productTitle",
            "description": "<p>title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>brand of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>images of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>models of the product passed array as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "create",
    "name": "PostApiV1EcommerceCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/:productId/removecart",
    "title": "Delete product by cartId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>cartId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Cart Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceProductidRemovecart"
  },
  {
    "type": "put",
    "url": "/api/v1/ecommerce/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/listcart",
    "title": "Get all cart list",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t   \"error\": false,\n\t   \"message\": \"All Product Details Found\",\n\t   \"status\": 200,\n\t   \"data\": [\n\t\t\t\t   {\n\t\t\t\t\tcartId: \"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tQuantity : number,\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\"\n\t\t\t\t   }\n\t\t\t   ]\n\t\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t   \"error\": true,\n\t   \"message\": \"Failed To Find cart Details\",\n\t   \"status\": 500,\n\t   \"data\": null\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceListcart"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/view/by/category/:categoryId",
    "title": "Get a single product category by categoryid",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The categoryId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"category Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [ \n\t\t\t\t\t{\n\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t__v: number,\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceViewByCategoryCategoryid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/view/by/product/:productId",
    "title": "Get a single product by product Id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t__v: number,\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceViewByProductProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/view/:categoryName",
    "title": "Get a single product by CategoryName",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>The categoryname should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"category Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t__v: number,\n\t\t\t\t\tcategoryId: \"string\",\n\t\t\t\t\tcategoryName: \"string\",\n\t\t\t\t\tsubCategoryId:\"string\",\n\t\t\t\t\tsubCategoryName:\"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tproductTitle: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductType : \"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tbrand : string,\n\t\t\t\t\tcolor : string,\n\t\t\t\t\timages: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tmodels: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceViewCategoryname"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/:cartId/count/quantity",
    "title": "Increase Product Quantity Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>cartId of the cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Cart Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tcartId: \"string\",\n\t\t\t\t\tproductId:\"string\",\n\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\tvendor : string,\n\t\t\t\t\tQuantity : number,\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommroutes.js",
    "groupTitle": "update",
    "name": "GetApiV1EcommerceCartidCountQuantity"
  }
] });
