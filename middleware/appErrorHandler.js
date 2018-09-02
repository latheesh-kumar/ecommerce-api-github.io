const response = require('../libs/responseLib');

let errorHandler = (err,req,res,next) =>{
    console.log("application error handler called");
    console.log(err);
    let apiResponse = response.generate(true,"some error occured at global level",500,null);
    res.send(apiResponse);
} // end requset ip logger function

let notFoundHandler = (req,res,next)=>{
    console.log("Global Not found handler called");
    let apiResponse=response.generate(true,"Route Not Found",404,null)
    res.status(404).send(apiResponse)
}
module.exports={
    globalErrorHandler : errorHandler,
    globalNotFoundHandler: notFoundHandler
}