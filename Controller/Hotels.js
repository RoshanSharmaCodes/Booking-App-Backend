const HotelSchema = require('../Schema/Hotel')

const DeleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await HotelSchema.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Delete This Hotel"
    next(err)
  }
}

const UpdateHotel = async (req, res, next) => {
  try {
    const updateHotel = await HotelSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Update This Hotel"
    next(err)
  }
}

const SaveHotel = async (req, res, next) => {
  const newHotel = new HotelSchema(req.body)
  try {
    const saveHotel = await newHotel.save()
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Save this Hotel"
    next(err)
  }
}

const GetHotelById = async (req, res, next) => {
  try {
    const hotel = await HotelSchema.findById(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Find This Hotel"
    next(err)
  }
}

const GetAllHotels = async (req, res, next) => {
    try {
        const allHotels = await HotelSchema.find()
        res.sendStatus(200)
      } catch (err) {
        err.message = "Could Not Find All Hotel"
        next(err)
      }
}


module.exports = {SaveHotel,UpdateHotel,DeleteHotel,GetAllHotels,GetHotelById}