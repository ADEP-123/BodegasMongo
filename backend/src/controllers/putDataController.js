import { getCantidadCombinacionService } from "../services/getServices.js";
import { postInventarioService } from "../services/postServices.js";
import { putCantidadProductInventarioService } from "../services/putServices.js";

const putInventarioController = async (req, res, next) => {
    try {
        const { bodega1, bodega2, producto, cantidad, usuario } = req.body
        let result = await getCantidadCombinacionService(bodega1, producto)
        if (result.length != 0) {
            const cantidadExistenteB1 = result[0].cantidad;
            if (cantidadExistenteB1 > cantidad) {
                result = await putCantidadProductInventarioService(bodega1, producto, (cantidadExistenteB1 - cantidad))
                result = await getCantidadCombinacionService(bodega2, producto)
                if (result.length != 0) {
                    const cantidadExistenteB2 = result[0].cantidad;
                    result = await putCantidadProductInventarioService(bodega2, producto, (cantidadExistenteB2 + cantidad))
                    res.status(200).json({ message: "Se han actualizado los inventarios con exito" })
                } else {
                    result = await postInventarioService(bodega2, producto, cantidad, usuario)
                    const id = result.insertedId;
                    res.status(200).json({ message: `Se ha actualizado 1 inventario y creado un inventario nuevo ${id}` })
                }
            } else {
                res.status(500).json({ message: `La cantidad existente (${cantidadExistenteB1}) en la bodega de salida es menor a la que desea mover (${cantidad})` })
            }
        } else {
            res.status(500).json({ message: `No existe ningun inventario con la combinacion bodega: ${bodega1} producto: ${producto}` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};



export {
    putInventarioController
}