const express = require('express')
const {Register,Login} = require('../Controller/Auth')
const userRouter = express.Router()


userRouter.post('/register', Register)

userRouter.get('/login', Login)

module.exports = userRouter