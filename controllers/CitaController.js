//importamos el Modelo
import CitaModel from "../models/CitaModel.js";
import ClienteModel from "../models/ClienteModel.js";

//** Métodos para el CRUD **/

export const obtenerClientes = async (req, res) => {
    try {
      const clientes = await ClienteModel.findAll(); // Obtener todos los clientes
      res.json(clientes); // Enviar la lista de clientes como respuesta
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
};

//Mostrar todos los registros
export const getAllCitas = async (req, res) => {
    try {
        const citas = await CitaModel.findAll({
            include: ClienteModel // Cargar la relación con el modelo de Cliente
        });
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCita = async (req, res) => {
    try {
        const cita = await CitaModel.findOne({
            where: { id: req.params.id },
            include: ClienteModel // Incluir el modelo de Cliente en la consulta
        });
        res.json(cita);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Crear un registro
export const createCita = async (req, res) => {
    try {
       await CitaModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateCita = async (req, res) => {
    try {
        await CitaModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteCita = async (req, res) => {
    try {
        await CitaModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}