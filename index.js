const express = require('express');
const appConfig = require('./config/config');
const route = express.Router();
const fs = require('fs');
const mongoose=require('mongoose');
const globalErrorMiddleware = require('./middleware/appErrorHandler');
const routeLoggerMiddleware = require('./middleware/routeLogger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(routeLoggerMiddleware.logIp)
app.use(globalErrorMiddleware.globalErrorHandler)
app.use(helmet())
// let helloWorldFunction = (req,res) =>{
//     res.send('Ecommerce API Run');
// }
// app.get('/',helloWorldFunction);
// app.listen(3000,()=>console.log("Ecommerce App Running"));

let mongoosePath = './models';
fs.readdirSync(mongoosePath).forEach(function (file) {
    if(-file.indexOf('.js')){
        console.log("File"+ mongoosePath + '/'+ file);  
    }  
});

let routesPath='./routes';
fs.readdirSync(routesPath).forEach(function (file) {
    if(-file.indexOf('.js')){
        console.log("File"+ routesPath + '/'+ file);
        let route =require(routesPath + '/'+ file);
        route.setRouter(app);
    }
});

app.use(globalErrorMiddleware.globalNotFoundHandler);

app.listen(appConfig.port,()=>{
    // console.log("server is running at 3000");
    //creating the mongoDB connection
    mongoose.Promise = global.Promise;
    let db=mongoose.connect(appConfig.db.uri,{useNewUrlParser: true});
})

mongoose.connection.on('error',function (err){
    console.log('Connection Error');
    console.log(err);
});

mongoose.connection.on('open',function (err){
    if(err){
        console.log('connection Error');
    }
    else{
        console.log('connection open');
    }
});

