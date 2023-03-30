const UserSchema = require('../Schema/User')

const DeleteUser = async (req, res, next) => {
  try {
    const deletedHotel = await UserSchema.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Delete This User"
    next(err)
  }
}

const UpdateUser = async (req, res, next) => {
  try {
    const updateHotel = await UserSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Update The User"
    next(err)
  }
}


const GetUser = async (req, res, next) => {
  try {
    const hotel = await UserSchema.findById(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    err.message = "Could Not Find This User"
    next(err)
  }
}

const GetAllUsers = async (req, res, next) => {
    try {
        const allHotels = await UserSchema.find()
        res.sendStatus(200)
      } catch (err) {
        err.message = "Could Not Find All Users"
        next(err)
      }
}


module.exports = {DeleteUser,UpdateUser,GetUser,GetAllUsers}