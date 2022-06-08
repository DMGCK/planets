import { dbContext } from "../db/DbContext.js";



// @ts-ignore
class GalaxiesService {
  async getAll(query = {}) {
    return await dbContext.Galaxies.find(query)
  }
  
  async create(body) {
    return await dbContext.Galaxies.create(body)
  }
}

// @ts-ignore
export const galaxiesService = new GalaxiesService()