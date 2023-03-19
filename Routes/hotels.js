const express = require('express')
const hotelRouter = express.Router()

hotelRouter.get('/', (req,res) => {
    res.send("hotels")
})

module.exports = hotelRouter