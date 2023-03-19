const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")

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

app.get("/", (req, res) => {
  res.json({ success: true })
})

app.listen(8000, () => {
  console.log("Listening to port 8000")
  connectMongoDB()
})
