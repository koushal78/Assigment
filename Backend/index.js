const path = require('path')
const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const authrouter = require("./routes/auth")
const ConnectTOMongoose = require('./Mongodb/ConnectToMongoose')
const PORT = process.env.PORT || 5000

 
const _dirname = path.resolve();

app.use(express.json())
app.use(express.static(path.join(_dirname,"/frontend/dist")))

app.use('/api',authrouter)
app.get("*",(req,res)=>{
    res.sendFile(path.join(_dirname,"frontend","dist","index.html"))
})
app.listen(PORT,()=>{
    ConnectTOMongoose();
    console.log(`app is running at the ${PORT}`)
})
