import Model from "../model/auth.model.js";
import { hashPassword, verifyPassword } from "../functions/bpt.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await Model.getUser(email);
    const compare = verifyPassword(password, data.password);
    if (compare) {
      res.status(200).json({ status: 200, message: "Usuario logueado", data });
    } else {
        res.status(401).json({ status: 401, message: "Usuario no logueado" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { rut, nombre, rol, correo, password } = req.body;
  const encryptedPassword = hashPassword(password);
  try {
    const respuesta = await Model.createUser(rut, nombre, rol, correo, encryptedPassword);
    res
      .status(200)
      .json({ status: 200, message: "Usuario creado", data: respuesta });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const user = req.body;
  try {
    const respuesta = await getUsers(user);
    res
      .status(200)
      .json({ status: 200, message: "Usuarios obtenidos", data: respuesta });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  login,
  createUser,
  getUsers,
};
