import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
  title:{type:String, required: true},
  type:{type:String, required:true}
},
{ timestamps: true, toJSON: { virtuals: true }})