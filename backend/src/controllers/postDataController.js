import { comprobarUsuarioService, getCombinationProductStorageAmount } from "../services/getServices.js";
import { postBodegaService, postInventarioService, postProductoService } from "../services/postServices.js";

const postBodegaController = async (req, res, next) => {
    try {
        const { id, nombre, responsable, estado, creador } = req.body
        const comprobarCreador = await comprobarUsuarioService(creador)
        if (comprobarCreador != 0) {
            const result = await postBodegaService(id, nombre, responsable, estado, creador)
            res.status(200).json({ message: "Registro insertado con exito", result })
            
        } else {
            res.status(500).json({ error: `Imposible realizar la insercion: el creador identificado con el id ${creador} no existe` })

        }
        console.log(comprobarCreador);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const postProductoController = async (req, res, next) => {
    try {
        const { id, nombre, descripcion, estado, creador } = req.body
        let result = await postProductoService(id, nombre, descripcion, estado, creador);
        if (result.acknowledged == true) {
            result = await postInventarioService(1234567, 12, id, 100, creador)
            res.status(200).json({ message: `El producto ${nombre} identificado con id: ${id} fue ingresado con exito en la bodega por defecto 12, con una cantidad inicial de 100` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const postInventarioController = async (req, res, next) => {
    try {
        const { id, bodega, producto, cantidad, creador } = req.body
        let result = await getCombinationProductStorageAmount(bodega, producto);
        if (result == 0) {
            result = await postInventarioService(id, bodega, producto, cantidad, creador)
            res.status(200).json({ message: "Inventario creado con exito" })
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