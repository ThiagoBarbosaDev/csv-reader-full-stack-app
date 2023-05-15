import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  async validate(req: Request, res: Response): Promise<void> {
    const csvData = req.file?.buffer.toString() as string;
    const response = await this.productsService.handler(csvData);
    console.log(response);
    res.status(statusCodes.ok).json({ message: response });
  }
}
