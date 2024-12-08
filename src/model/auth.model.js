import clientDB from "../database.js";

//crud
const getUser = async (email) => {
  const query = `
      SELECT *
      FROM usuarios
      WHERE correo = $1
    `;
    const values = [email];
  try {
    const res = await clientDB.query(query, values); //ejecuta la query y los valores de la consulta
    return JSON.parse(JSON.stringify(res.rows[0]));
  } catch (error) {
    throw new Error("User not found");
  }
};

const createUser = async (rut, nombre, rol, correo, password) => {
  const query =
    "INSERT INTO usuarios (rut, nombre, rol, correo, password) VALUES ($1, $2, $3, $4, $5) RETURNING *"; // 1$ = rut
  const values = [rut, nombre, rol, correo, password];

  try {
    const res = await clientDB.query(query, values); //ejecuta la query y los valores de la consulta
    return JSON.parse(JSON.stringify(res.rows[0]));
  } catch (error) {
    throw new Error(error);
  }
};

const getAllUsers = async (user) => {
  const query = "SELECT * FROM usuarios ";
  try {
    const res = await clientDB.query(query); //ejecuta la query y los valores de la consulta
    return JSON.parse(JSON.stringify(res.rows));
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  createUser,
  getUser,
  getAllUsers,
};
