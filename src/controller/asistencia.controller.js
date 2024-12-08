import Model from "../model/asistencia.model.js";

const getProfeByQR = async (req, res) => {
  const { rut, edifico, sala } = req.body;
  console.log(rut, 'A2', sala);
  try {
    const response = await Model.getProfeByQR(rut, 'A2', sala);
    res
      .status(200)
      .json({ status: 200, message: "Profesor obtenido", data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getProfeByQR,
};