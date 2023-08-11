import { Router } from 'express';
import { postBodegaController } from '../controllers/postDataController.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", postBodegaController)

    return router;
}

export default postInitRoute