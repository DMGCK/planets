import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema({
  PlanetId: {type:ObjectId, ref:'Planet'},
  type: {type:String, required:true}
})