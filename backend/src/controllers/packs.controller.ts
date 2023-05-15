import { Request, Response } from 'express';
import { PacksService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class PacksController {
  constructor(private packsService: PacksService) {
    this.packsService = packsService;
  }

  async update(req: Request, res: Response): Promise<void> {
    const csvData = req.file?.buffer.toString() as string;
    await this.packsService.update(csvData);
    res.status(statusCodes.noContent).end();
  }
}
