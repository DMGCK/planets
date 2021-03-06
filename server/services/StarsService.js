import { dbContext } from "../db/DbContext"


class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }
  
  async create(body) {
    return await dbContext.Stars.create(body)
  }
}

export const starsService = new StarsService()