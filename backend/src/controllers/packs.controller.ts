import { Request, Response } from 'express';
import { PacksService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class PacksController {
  constructor(private packsService: PacksService) {
    this.packsService = packsService;
  }

  async update(req: Request, res: Response): Promise<void> {
    const data = await this.packsService.update();
    res.status(statusCodes.ok).json({ data });
  }
}
