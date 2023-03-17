const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({success:true})
})

app.listen(8000,()=>{
    console.log("Listening to port 8000")
})