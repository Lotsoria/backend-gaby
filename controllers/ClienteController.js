//importamos el Modelo
import ClienteModel from "../models/ClienteModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllClientes = async (req, res) => {
    try {
        const blogs = await ClienteModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCliente = async (req, res) => {
        try {
            const blog = await ClienteModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(blog[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createCliente = async (req, res) => {
    try {
       await ClienteModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateCliente = async (req, res) => {
    try {
        await ClienteModel.update(req.body, {
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteCliente = async (req, res) => {
    try {
        await ClienteModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}