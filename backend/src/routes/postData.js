import { Router } from 'express';
import { postBodegaController, postProductoController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", mongoErrorHandlingMiddleware, postBodegaController)
    router.post("/producto", postProductoController)

    return router;
}

export default postInitRoute