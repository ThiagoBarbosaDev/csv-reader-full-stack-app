import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  validate(req:Request, res:Response): void {
    const response = this.productsService.validate();
    res.status(statusCodes.ok).json(response);
  }
}
