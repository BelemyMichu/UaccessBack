import authController from '../controller/auth.controller.js'
import { Router } from 'express'

const rutas = Router()

rutas.post('/login', authController.login)
rutas.post('/create-user', authController.createUser)
rutas.get('/get-users', authController.getUsers)

export default rutas