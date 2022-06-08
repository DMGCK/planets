import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpeciesSchema } from "../models/Species";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Stars = mongoose.model('Star', StarSchema);

  Planets = mongoose.model('Planet', PlanetSchema);

  Moons = mongoose.model('Moon', MoonSchema)

  AllSpecies = mongoose.model('Species', SpeciesSchema)

}

export const dbContext = new DbContext()
