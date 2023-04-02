const errorHandler = (req,res,err,next)=>{
    // const statusCode = res.statusCode ? res.statusCode:500;
    // res.status(statusCode)
    if(res.headersSent){
        return next(err.message)
    }
    // res.status(500)
    res.json('error',{
        error: err.message,
    })
}
module.exports = errorHandler