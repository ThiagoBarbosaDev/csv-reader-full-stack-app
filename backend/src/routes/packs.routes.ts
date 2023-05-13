import { Router } from 'express';
import { PacksService } from '../services';
import { PacksController } from '../controllers';

const packsRouter = Router();

const packsService = new PacksService();
const packsController = new PacksController(packsService);

packsRouter.route('/validate').put((req, res) => packsController.update(req, res));

export default packsRouter;
