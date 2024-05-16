// Importamos la conexión a la DB
import db from "../database/db.js";
// Importamos sequelize
import { DataTypes } from "sequelize";
import ClienteModel from "./ClienteModel.js"; // Importamos el modelo de Cliente

// Definimos el modelo de Cita
const CitaModel = db.define('citas', {
  fecha: { type: DataTypes.DATE },
  hora: { type: DataTypes.TIME },
  motivo: { type: DataTypes.STRING }
});

// Establecemos la relación con el modelo de Cliente
CitaModel.belongsTo(ClienteModel, { foreignKey: 'cliente_id' });

export default CitaModel;
