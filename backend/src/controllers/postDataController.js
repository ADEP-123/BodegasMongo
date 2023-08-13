import { postBodegaService, postInventarioService, postProductoService } from "../services/postServices.js";

const postBodegaController = async (req, res, next) => {
    try {
        const { id, nombre, responsable, estado, creador, actualizador } = req.body
        const result = await postBodegaService(id, nombre, responsable, estado, creador, actualizador)
        res.status(200).json({ message: "Registro insertado con exito", result })
    } catch (error) {
        res.status(500).json({ error })
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

export {
    postBodegaController,
    postProductoController
}