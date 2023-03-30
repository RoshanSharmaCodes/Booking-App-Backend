const express = require("express")
const HotelSchema = require("../Schema/Hotel")
const hotelRouter = express.Router()
const {verifyAdmin, verifyUser} = require("../Utils/verifyTokens")
const { SaveHotel, UpdateHotel, DeleteHotel, GetAllHotels, GetHotelById } = require("../Controller/Hotels")

hotelRouter.post("/",verifyAdmin, SaveHotel)

hotelRouter.put("/:id",verifyAdmin, UpdateHotel)

hotelRouter.delete("/:id",verifyAdmin, DeleteHotel)

hotelRouter.get("/:id",verifyUser, GetHotelById)

hotelRouter.get("/",verifyUser, GetAllHotels)

module.exports = hotelRouter
