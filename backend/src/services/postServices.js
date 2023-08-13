import Bodegas from "../entities/bodegas.js";
import Counters from "../entities/counters.js";
import Inventarios from "../entities/inventarios.js";
import Productos from "../entities/productos.js";

const postBodegaService = async (nombre, responsable, estado, creador) => {
    const counter = new Counters();
    const nuevaSesion = await counter.getNewId("bodegas");
    const { newId, session } = nuevaSesion;
    // console.log(newId);
    const bodega = new Bodegas();
    const result = await bodega.postNewBodega(newId, nombre, responsable, estado, creador);
    session.endSession();
    return result;
};

const postProductoService = async (nombre, descripcion, estado, creador) => {
    const counter = new Counters();
    const nuevaSesion = await counter.getNewId("productos");
    const { newId, session } = nuevaSesion;
    // console.log(newId);
    const producto = new Productos();
    const result = await producto.postNewProduct(newId, nombre, descripcion, estado, creador);
    session.endSession();
    return result;
};

const postInventarioService = async (bodega, producto, cantidad, creador) => {
    const counter = new Counters();
    const nuevaSesion = await counter.getNewId("inventarios");
    const { newId, session } = nuevaSesion;
    // console.log(newId);
    const inventario = new Inventarios();
    const result = await inventario.postNewInventario(newId, bodega, producto, cantidad, creador);
    session.endSession();
    return result;
};

export {
    postBodegaService,
    postProductoService,
    postInventarioService
}