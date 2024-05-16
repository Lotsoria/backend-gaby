//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const ClienteModel = db.define('clientes', {
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    direccion: {type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
 })

 export default ClienteModel