import Inventarios from "../entities/inventarios.js";

const putCantidadProductInventarioService = async (bodega, producto, cantidad) => {
    const inventario = new Inventarios()
    const result = await inventario.updateCantidadInventario(bodega, producto, cantidad);
    return result;
};



export {
    putCantidadProductInventarioService
}