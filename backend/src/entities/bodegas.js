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
            const result = collection.aggregate(pipeline).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async postNewBodega(id, nombre, responsable, estado, creador, actualizador) {
        try {
            const collection = await collectionGen("bodegas")
            const result = await collection.insertOne({
                _id: id,
                nombre: nombre,
                id_responsable: responsable,
                estado: estado,
                created_by: creador,
                update_by: actualizador,
                created_at: new Date(),
                updated_at: null,
                deleted_at: null
            });
            return result
        } catch (error) {
            throw error
            // if (error.name == "MongoServerError") {
            //     const errorSchema = error.errInfo.details.schemaRulesNotSatisfied;
            //     if (errorSchema.length != 0) {
            //         let propiedades = errorSchema[0].propertiesNotSatisfied
            //         let arrCaract = []
            //         propiedades.forEach(element => {
            //             arrCaract.push(element.description)
            //         });
            //         console.log(arrCaract);
            //         error = {
            //             error: "Error en tipo de datos",
            //             datosErroneos: arrCaract
            //         }
            //     }
            //     throw error
            // } else {
            //     throw error;
            // }
        }
    }

}
export default Bodegas;