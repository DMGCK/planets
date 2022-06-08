import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
  PlanetId: {type:ObjectId, ref:'Planet'},
  name: {type:String, required:true}
})