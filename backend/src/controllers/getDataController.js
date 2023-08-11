import { getAllBodegasService } from "../services/getServices.js";

const getBodegasController = async (req, res, next) => {
    try {
        const result = await getAllBodegasService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    getBodegasController
}