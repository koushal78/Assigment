const User = require("../Model/User.model")
const generateTokenAndsetCookie = require("../utiles/jwt")

 const signup = async (req,res)=>{
try {
    const {fullname,username,password,confirmpassword,gender} = req.body
    if(password !== confirmpassword){
        return res.status(400).json({error:"password don't match "})
    }

    const user = await User.findOne({username})

    if(user){
        return res.status(400).json({error:"user is already exist "})
    }
  
    const newUser = new User({
        fullname,
        username,
        password,
        confirmpassword,
        gender

    })

if(newUser){
     generateTokenAndsetCookie(newUser._id,res)
    await newUser.save();
    return res.status(201).json({
        _id:newUser._id,
        fullname:newUser.fullname,
       username:newUser.username,
    
    })
}
else{
    res.status(400).json({error:"invalid user data"})
}
} catch (error) {
    console.log("error in the signup",error.message)
res.status(500).json({error:"internal server error"})
    
}

}
const login = async(req,res)=>{

 try {
    const{username,password} = req.body
    const user = await User.findOne({username})


    if(!user  ){
        return res.status(400).json({error:"invalid  username"})


    }
    if(password != user.password || "" ){
       return res.status(400).json({error:"invalid  password"})

    }
 generateTokenAndsetCookie(user._id,res)
 res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    password:user.password,
 })
    
 } catch (error) {
    console.log("error in login controller",error.message)
    res.status(500).json({error:"invalid server error"})
    
 }
}
const logout = (req,res)=>{
 try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"logged out successfully"})
 } catch (error) {
    console.log("error in logout controller",error.message)
    res.status(500).json({error:"internal server error"})
    
 }
}
module.exports = {signup,login,logout}