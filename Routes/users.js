const express = require("express")
const { Register, Login } = require("../Controller/Auth")
const { DeleteUser, UpdateUser, GetUser, GetAllUsers } = require("../Controller/Users")
const { verifyAdmin, verifyUser } = require("../Utils/verifyTokens")
const userRouter = express.Router()

userRouter.post("/register", Register)

userRouter.get("/login", Login)

userRouter.delete("/delete", verifyUser, DeleteUser)

userRouter.put("/:id", verifyUser, UpdateUser)

userRouter.get("/:id", verifyUser, GetUser)

userRouter.get("/all", verifyAdmin ,GetAllUsers)

module.exports = userRouter
