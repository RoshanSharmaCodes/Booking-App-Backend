const express = require("express")
const HotelSchema = require("../Schema/Hotel")
const hotelRouter = express.Router()

//Save Hotel API
hotelRouter.post("/", async (req, res) => {
  const newHotel = new HotelSchema(req.body)
  try {
    const saveHotel = await newHotel.save()
    res.sendStatus(200)
  } catch (err) {
    res.send("Could Not Save Hotel")
  }
})

//Update Hotel
hotelRouter.put("/:id", async (req, res) => {
  try {
    const updateHotel = await HotelSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    res.sendStatus(200)
  } catch (err) {
    res.send("Could Not Update Hotel")
  }
})

//Delete Hotel
hotelRouter.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await HotelSchema.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    res.send("Could Not Update Hotel")
  }
})

hotelRouter.get("/:id", async (req, res) => {
  try {
    const hotel = await HotelSchema.findById(req.params.id)
    console.log("Found Hote",hotel)
    res.sendStatus(200)
  } catch (err) {
    res.send("Could Not Update Hotel")
  }
})

hotelRouter.get("/", async (req, res) => {
  try {
    const allHotels = await HotelSchema.find()
    res.sendStatus(200)
  } catch (err) {
    res.send("Could Not Get All Hotels",err)
  }
})

module.exports = hotelRouter
