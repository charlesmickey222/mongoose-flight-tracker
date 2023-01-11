import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline:String,
  airport:String,
  flightNum:{type:Number,min:10,max:9999},
  departs:{type:Date},
},{
  timestamps:true,
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight,
}