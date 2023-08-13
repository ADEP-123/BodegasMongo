import { postBodegaService } from "../services/postServices.js";

const postBodegaController = async (req, res, next) => {
    try {
        const { id, nombre, responsable, estado, creador, actualizador } = req.body
        const result = await postBodegaService(id, nombre, responsable, estado, creador, actualizador)
        res.status(200).json({ message: "Registro insertado con exito", result })
    } catch (error) {
        res.status(500).json({error})
    }
};

export {
    postBodegaController
}