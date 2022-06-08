import mongoose from 'mongoose'
// import { ObjectId } from "mongoose"
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({
  GalaxyId: {type:ObjectId, ref:'Galaxy' },
  name: {type:String, required:true},
  size: {type:String, required:true}
},
{ timestamps: true, toJSON: { virtuals: true }})

// StarSchema.virtual('GalaxyId') {
// }