import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private ProductsService: ProductsService) {
    this.ProductsService = ProductsService;
  }

  async validate(req:Request, res:Response): Promise<void> {
    res.status(statusCodes.OK).json({ message: 'validate route works' });
  }
}
