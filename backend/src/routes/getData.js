import { Router } from 'express';
import { getBodegasController } from '../controllers/getDataController.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/bodegas", getBodegasController)

    return router;
}

export default getInitRoute