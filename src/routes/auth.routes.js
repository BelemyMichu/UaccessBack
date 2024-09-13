import authController from '../controller/auth.controller.js'
import { Router } from 'express'

const rutas = Router()

rutas.post('/create-user', authController.createUser)
rutas.post('/create-cuenta', authController.createCuenta)
rutas.get('/get-users', authController.getUsers)

export default rutas