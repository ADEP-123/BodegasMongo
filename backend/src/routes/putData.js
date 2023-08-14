import { Router } from 'express';
import { putInventarioController } from '../controllers/putDataController.js';
import {middlewareContentLengthUpdtInventarios} from '../middleware/contentLength.js'
import { middlewareUpdateInventariosDTO } from '../middleware/middlewareDTO.js';

const putInitRoute = () => {
    const router = Router()
    router.put("/inventario", middlewareContentLengthUpdtInventarios,middlewareUpdateInventariosDTO, putInventarioController)


    return router;
}

export default putInitRoute