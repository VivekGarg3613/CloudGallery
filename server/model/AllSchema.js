import mongoose from "mongoose";
//New user schema
const userSchema1 = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        // unique: true
    },  
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        // unique:true
    },
    reciveOtp:String,
    // expireTimeOfOtp: Date.now()
},{timestamps:true})

const verificationOtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        require:true
    },
    expireOtp:{
        type:Number,
        default: Date.now()*5*60*1000
    }
})

const imageSchema= new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    url:{
        type:String,
        require:true
    }
})

const Hotel_name= new mongoose.Schema({
    name:String,
    location:String
})






export const User= mongoose.model('user',userSchema1)
export const Hotels=mongoose.model('Hotel',Hotel_name)
export const Image=mongoose.model('image',imageSchema)

