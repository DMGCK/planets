import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";


export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
    .get('', this.getAll)
    .post('', this.create)
  }
  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    logger.log(req.body)
    
    try {
      const galaxy = await galaxiesService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}

