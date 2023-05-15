import { Router } from 'express';
import multer from 'multer';
import { PacksService } from '../services';
import { PacksController } from '../controllers';

const packsRouter = Router();

const packsService = new PacksService();
const packsController = new PacksController(packsService);

const storage = multer.memoryStorage();
const upload = multer({ storage });

packsRouter
  .route('/update')
  .put(upload.single('file'), (req, res) =>
    packsController.update(req, res));

export default packsRouter;
