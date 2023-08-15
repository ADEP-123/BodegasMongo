import { Router } from 'express';
import { postBodegaController, postInventarioController, postProductoController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';
import { middlewareContentLengthBodegas, middlewareContentLengthInventario, middlewareContentLengthProductos } from '../middleware/contentLength.js';
import { middlewareBodegasDTO, middlewareInventariosDTO, middlewareProductosDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareBodegas, contentMiddlewareInventarios, contentMiddlewareProductos } from '../middleware/contentMiddlewareVerify.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", middlewareContentLengthBodegas, contentMiddlewareBodegas, middlewareBodegasDTO, postBodegaController)
    router.post("/productos", middlewareContentLengthProductos, contentMiddlewareProductos, middlewareProductosDTO, postProductoController)
    router.post("/inventario", middlewareContentLengthInventario, contentMiddlewareInventarios, middlewareInventariosDTO, postInventarioController)

    return router;
}

export default postInitRoute