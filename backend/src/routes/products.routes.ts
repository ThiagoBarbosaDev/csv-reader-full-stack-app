import { Router } from 'express';
import { ProductsService } from '../services';
import { ProductsController } from '../controllers';

const productsRouter = Router();

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

productsRouter.route('/validate').post((req, res) => productsController.validate(req, res));

export default productsRouter;
