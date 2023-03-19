const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (req,res,next) => {
    res.send("users")
})

module.exports = userRouter