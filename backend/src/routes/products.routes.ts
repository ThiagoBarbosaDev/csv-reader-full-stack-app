import { Router } from 'express';
import multer from 'multer';
import { ProductsService } from '../services';
import { ProductsController } from '../controllers';

const productsRouter = Router();

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

const storage = multer.memoryStorage();
const upload = multer({ storage });

productsRouter
  .route('/validate')
  .post(upload.single('file'), (req, res) =>
    productsController.validate(req, res));

export default productsRouter;
