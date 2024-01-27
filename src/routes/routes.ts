import { Router } from "express";
import * as apiController from '../controllers/apiControllers';

export const routes = Router();

routes.get('/', apiController.allData);
routes.post('/', apiController.add);
routes.put('/:id', apiController.update);
routes.delete('/:id', apiController.remove);

