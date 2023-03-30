const jwt = require("jsonwebtoken")
require("dotenv").config()

export const verifyTokens = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token){
        next(new Error("Token Not Found"))
    }
    jwt.verify(token,process.env.JWT_SECRET, (err, user)=>{
        if(err) next(err)
        req.user = user
        next()
    })
}


export const verifyUser = (req, res, next) => {
    verifyTokens(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            next(new Error("Fake User Detected"))
        }
    })
}


export const verifyAdmin = (req, res, next) => {
    verifyTokens(req, res, next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            next(new Error("User is not admin"))
        }
    })
}


