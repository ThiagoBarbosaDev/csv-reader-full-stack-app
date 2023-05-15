import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  validate(req: Request, res: Response): void {
    const csvData = req.file?.buffer.toString() as string;
    const response = this.productsService.handler(csvData);
    res.status(statusCodes.ok).json({ message: response });
  }
}
