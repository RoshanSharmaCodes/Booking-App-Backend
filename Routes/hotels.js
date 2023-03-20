const express = require("express")
const HotelSchema = require("../Schema/Hotel")
const hotelRouter = express.Router()
const { SaveHotel, UpdateHotel, DeleteHotel, GetAllHotels, GetHotelById } = require("../Controller/Hotels")

hotelRouter.post("/", SaveHotel)

hotelRouter.put("/:id", UpdateHotel)

hotelRouter.delete("/:id", DeleteHotel)

hotelRouter.get("/:id", GetHotelById)

hotelRouter.get("/", GetAllHotels)

module.exports = hotelRouter
