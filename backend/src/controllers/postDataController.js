import { comprobarUsuarioService, getCombinationProductStorageAmount } from "../services/getServices.js";
import { postBodegaService, postInventarioService, postProductoService } from "../services/postServices.js";

const postBodegaController = async (req, res, next) => {
    try {
        const { nombre, responsable, estado, creador } = req.body
        const comprobarCreador = await comprobarUsuarioService(creador)
        if (comprobarCreador != 0) {
            const result = await postBodegaService(nombre, responsable, estado, creador)
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
        const { nombre, descripcion, estado, creador } = req.body;
        const comprobarCreador = await comprobarUsuarioService(creador)
        if (comprobarCreador != 0) {
            let result = await postProductoService(nombre, descripcion, estado, creador);
            const idProducto = Number(result.insertedId)
            if (result.acknowledged == true) {
                result = await postInventarioService(12, idProducto, 100, creador)
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
        const { bodega, producto, cantidad, creador } = req.body
        let result = await getCombinationProductStorageAmount(bodega, producto);
        if (result == 0) {
            result = await postInventarioService(bodega, producto, cantidad, creador)
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