const RoomSchema = require("../Schema/Room")
const HotelSchema = require("../Schema/Hotel")

const CreateRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId
  const newRoom = new RoomSchema(req.body)
  const savedRoom = await newRoom.save()
  try {
    const hotel = HotelSchema.findByIdAndUpdate(hotelId, { $push: savedRoom._id })
  } catch (err) {
    next(err)
  }
}

const UpdateRoom = async (req, res, next) => {
  try {
    const updateHotel = await RoomSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Update This Hotel"
    next(err)
  }
}

const GetRoomById = async (req, res, next) => {
  try {
    const hotel = await RoomSchema.findById(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Find This Hotel"
    next(err)
  }
}

const GetAllRooms = async (req, res, next) => {
  try {
    const allHotels = await RoomSchema.find()
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Find All Hotel"
    next(err)
  }
}

const DeleteRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId
    const deletedHotel = await RoomSchema.findByIdAndDelete(req.params.id)
    try{
        await HotelSchema.findByIdAndUpdate(hotelId, {$pull: req.params.id})
    }catch(err){
        next(err)
    }
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Delete This Hotel"
    next(err)
  }
}

module.exports = { CreateRoom, GetAllRooms, GetRoomById, UpdateRoom, DeleteRoom }
