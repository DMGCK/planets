import mongoose from 'mongoose'
// import { ObjectId } from "mongoose"

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  StarId: {type:ObjectId, ref:"Star"},
  supportsLife: {type:Boolean, required:true}
},
{ timestamps: true, toJSON: { virtuals: true }})