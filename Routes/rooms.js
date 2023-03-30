const express = require('express')
const roomRouter = express.Router()
const {DeleteRoom,CreateRoom,GetRoomById,UpdateRoom,GetAllRooms} = require("../Controller/Room")

roomRouter.post("/:hotelId",verifyAdmin, CreateRoom)

roomRouter.put("/:id",verifyAdmin, UpdateRoom)

roomRouter.delete("/:id/:hotelId",verifyAdmin, DeleteRoom)

roomRouter.get("/:id",verifyUser, GetRoomById)

roomRouter.get("/",verifyUser, GetAllRooms)

module.exports = hotelRouter


module.exports = roomRouter