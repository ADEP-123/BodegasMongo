import Bodegas from "../entities/bodegas.js";
import Inventarios from "../entities/inventarios.js";
import Productos from "../entities/productos.js";

const postBodegaService = async (id, nombre, responsable, estado, creador) => {
    const bodega = new Bodegas();
    const result = await bodega.postNewBodega(id, nombre, responsable, estado, creador);
    return result;
};

const postProductoService = async (id, nombre, descripcion, estado, creador) => {
    const producto = new Productos();
    const result = await producto.postNewProduct(id, nombre, descripcion, estado, creador);
    return result;
};

const postInventarioService = async (id, bodega, producto, cantidad, creador) => {
    const inventario = new Inventarios();
    const result = await inventario.postNewInventario(id, bodega, producto, cantidad, creador);
    return result;
};

export {
    postBodegaService,
    postProductoService,
    postInventarioService
}