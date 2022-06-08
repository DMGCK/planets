import { dbContext } from "../db/DbContext"


class PlanetsService {
  async getAll(query) {
    return await dbContext.Planets.find(query)
  }
  async create(body) {
    return await dbContext.Planets.create(body)
  }
  
}

export const planetsService = new PlanetsService()