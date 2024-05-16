import express from 'express'
import { getAllClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../controllers/ClienteController.js'
import { getAllCitas, getCita, createCita, updateCita, deleteCita } from '../controllers/CitaController.js'
const router = express.Router()

router.get('/Clientes', getAllClientes)
router.get('/Clientes/:id', getCliente)
router.post('/Clientes/create', createCliente)
router.put('/Clientes/update/:id', updateCliente)
router.delete('/Clientes/delete/:id', deleteCliente)

router.get('/Citas', getAllCitas)
router.get('/Citas/:id', getCita)
router.post('/Citas/create', createCita)
router.put('/Citas/update/:id', updateCita)
router.delete('/Citas/delete/:id', deleteCita)

export default router
