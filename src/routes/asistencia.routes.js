import asistController from '../controller/asistencia.controller.js'
import { Router } from 'express'

const rutas = Router()

rutas.post('/get', asistController.getProfeByQR)

export default rutas