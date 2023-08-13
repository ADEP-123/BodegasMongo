import { Router } from 'express';
import { postBodegaController, postInventarioController, postProductoController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';
import { middlewareContentLengthBodegas, middlewareContentLengthInventario, middlewareContentLengthProductos } from '../middleware/contentLength.js';
import { middlewareTipoCitaDTO } from '../middleware/middlewareDTO.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", middlewareContentLengthBodegas, middlewareTipoCitaDTO, postBodegaController)
    router.post("/productos", middlewareContentLengthProductos, postProductoController)
    router.post("/inventario", middlewareContentLengthInventario, postInventarioController)

    return router;
}

export default postInitRoute