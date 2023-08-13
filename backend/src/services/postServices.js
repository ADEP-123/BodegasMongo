import Bodegas from "../entities/bodegas.js";
import Inventarios from "../entities/inventarios.js";
import Productos from "../entities/productos.js";

const postBodegaService = async ( nombre, responsable, estado, creador) => {
    const bodega = new Bodegas();
    const result = await bodega.postNewBodega( nombre, responsable, estado, creador);
    return result;
};

const postProductoService = async ( nombre, descripcion, estado, creador) => {
    const producto = new Productos();
    const result = await producto.postNewProduct( nombre, descripcion, estado, creador);
    return result;
};

const postInventarioService = async ( bodega, producto, cantidad, creador) => {
    const inventario = new Inventarios();
    const result = await inventario.postNewInventario( bodega, producto, cantidad, creador);
    return result;
};

export {
    postBodegaService,
    postProductoService,
    postInventarioService
}