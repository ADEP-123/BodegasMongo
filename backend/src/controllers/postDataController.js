import { comprobarUsuarioService, getCombinationProductStorageAmount } from "../services/getServices.js";
import { postBodegaService, postInventarioService, postProductoService } from "../services/postServices.js";

const postBodegaController = async (req, res, next) => {
    try {
        const { nombre, id_responsable, estado, created_by } = req.body
        // console.log("req.body: ", req.body);
        const comprobarCreador = await comprobarUsuarioService(created_by)
        // console.log("comprobarCreador: ", comprobarCreador);
        if (comprobarCreador != 0) {
            const result = await postBodegaService(nombre, id_responsable, estado, created_by)
            res.status(200).json({ message: "Registro insertado con exito", result })

        } else {
            res.status(500).json({ error: `Imposible realizar la insercion: el creador identificado con el id ${creador} no existe` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const postProductoController = async (req, res, next) => {
    try {
        const { nombre, descripcion, estado, created_by } = req.body;
        const comprobarCreador = await comprobarUsuarioService(created_by)
        if (comprobarCreador != 0) {
            let result = await postProductoService(nombre, descripcion, estado, created_by);
            const idProducto = Number(result.insertedId)
            if (result.acknowledged == true) {
                result = await postInventarioService(12, idProducto, 100, created_by)
                const idInventario = Number(result.insertedId)
                res.status(200).json({ message: `El producto ${nombre} identificado con id: ${idProducto} fue ingresado con exito en la bodega por defecto 12, con una cantidad inicial de 100, inventario ${idInventario} del registro creado con exito` })
            }
        } else {
            res.status(500).json({ error: `Imposible realizar la insercion: el creador identificado con el id ${creador} no existe` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const postInventarioController = async (req, res, next) => {
    try {
        const { id_bodega, id_producto, cantidad, created_by } = req.body
        let result = await getCombinationProductStorageAmount(id_bodega, id_producto);
        if (result == 0) {
            result = await postInventarioService(id_bodega, id_producto, cantidad, created_by)
            const id = result.insertedId
            res.status(200).json({ message: `Inventario ${id} creado con exito` })
        } else {
            res.status(500).json({ message: "Esa combinacion de bodega y producto ya existen" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export {
    postBodegaController,
    postProductoController,
    postInventarioController
}