import { Router } from 'express';
import { postBodegaController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", mongoErrorHandlingMiddleware, postBodegaController)

    return router;
}

export default postInitRoute