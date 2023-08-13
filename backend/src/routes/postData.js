import { Router } from 'express';
import { postBodegaController, postInventarioController, postProductoController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", mongoErrorHandlingMiddleware, postBodegaController)
    router.post("/producto", postProductoController)
    router.post("/inventario", postInventarioController)

    return router;
}

export default postInitRoute