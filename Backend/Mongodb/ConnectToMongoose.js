const mongoose = require('mongoose')

const ConnectTOMongoose = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongodb is connected")
  } catch (error) {
    console.log("error in connecting mongodb",error.message)
    
  }
}

module.exports =  ConnectTOMongoose ;