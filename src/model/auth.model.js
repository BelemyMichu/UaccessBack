import clientDB from '../database.js'
//crud
export const createUser = async (user) => { 
    const query = 'INSERT INTO usuarios (rut,nombre, apellido,rol) VALUES ($1, $2, $3, $4) RETURNING *'// 1$ =user.name 
    const values = [user.rut,user.nombre, user.apellido, user.rol]
    
    try {
        const res = await clientDB.query(query, values) //ejecuta la query y los valores de la consulta
        return JSON.parse(JSON.stringify(res.rows[0]));
    } catch (error) {
        throw new Error(error)
    }
    
}

export const createCuenta = async (cuenta) => { 
    const query = 'INSERT INTO cuentas (rut,email, contaseña) VALUES ($1, $2, $3) RETURNING *'// 1$ =user.name 
    const values = [cuenta.rut, cuenta.email, cuenta.contraseña]
    try {
        const res = await clientDB.query(query, values) //ejecuta la query y los valores de la consulta
        return JSON.parse(JSON.stringify(res.rows[0]));
    } catch (error) {
        throw new Error(error)
    }
    
}

export const getUsers = async (user) => { 
    const query = 'SELECT * FROM usuarios '
    try {
        const res = await clientDB.query(query) //ejecuta la query y los valores de la consulta
        return JSON.parse(JSON.stringify(res.rows));
    } catch (error) {
        throw new Error(error)
    }
    
}