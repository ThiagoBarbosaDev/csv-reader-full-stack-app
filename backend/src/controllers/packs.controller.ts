import { Request, Response } from 'express';
import { PacksService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class PacksController {
  constructor(private PacksService: PacksService) {
    this.PacksService = PacksService;
  }

  async update(req:Request, res:Response): Promise<void> {
    res.status(statusCodes.OK).json({ message: 'update route works' });
  }
}
