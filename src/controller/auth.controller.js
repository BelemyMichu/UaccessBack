import { createUser, createCuenta, getUsers } from '../model/auth.model.js'

const authController = {
    async createUser(req, res) {
        const { rut, nombre, apellido, rol } = req.body
        const user = { rut, nombre, apellido, rol }
        console.log(user)
        try {
            const respuesta = await createUser(user)
            res.status(200).json({status:200, message: 'Usuario creado', data: respuesta})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
    async createCuenta(req, res) {
        const cuenta = req.body
        try {
            const respuesta = await createCuenta(cuenta)
            res.status(200).json({status:200, message: 'Cuenta creada', data: respuesta})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
    async getUsers(req, res) {
        const user = req.body
        try {
            const respuesta = await getUsers(user)
            res.status(200).json({status:200, message: 'Usuarios obtenidos', data: respuesta})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default authController