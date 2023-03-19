const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const authRouter = require("./Routes/auth")
const roomRouter = require("./Routes/rooms")
const hotelRouter = require("./Routes/hotels")
const userRouter = require("./Routes/users")


//MongoDB configuration
const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_LINK)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log("Failed To Connect to MongoDB",err)
  }
}

mongoose.connection.on("disconnected", () => {
    console.log("Connection Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("Connection Completed")
})

app.use(express.json())
//APIs Middleware
app.use("/",authRouter)
app.use("/user",userRouter)
app.use("/hotel",hotelRouter)
app.use("/room",roomRouter)

app.use((err, req, res, next) => {
    console.log("Error Occured", err.message)
    return res.send("Error Occured: " + err.message)
})

app.get("*", (req,res)=>{
    res.send("<h1>Sorry! Not able to locate.</h1>")
})


app.listen(8000, () => {
  console.log("Listening to port 8000")
  connectMongoDB()
})
