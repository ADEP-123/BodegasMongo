import collectionGen from "../utils/db.js";
class Bodegas {
    constructor() { }
    async getAllBodegas() {
        try {
            const collection = await collectionGen("bodegas");
            const pipeline = [
                {
                    $project: {
                        ID: "$_id",
                        Bodega_Nombre: "$nombre",
                        Responsable_ID: "$id_responsable",
                        Estado: "$estado",
                        Creado_Por: "$created_by",
                        Actualizado_Por: "$update_by",
                        Fecha_Creacion: "$created_at",
                        Fecha_Actualizacion: "$update_by",
                        Fecha_Eliminacion: "$deleted_at"
                    }
                },
                {
                    $sort: {
                        nombre: 1
                    }
                }
            ]
            return collection.aggregate(pipeline).toArray();
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }

}
export default Bodegas;