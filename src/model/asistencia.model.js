import clientDB from "../database.js";

const getProfeByQR = async (rut, edifico, sala) => {
  const query = `
      SELECT *
      FROM get_profe_by_hour($1, $2, $3);
    `;
  const values = [rut, edifico, sala];
  try {
    const res = await clientDB.query(query, values); //ejecuta la query y los valores de la consulta
    return JSON.parse(JSON.stringify(res.rows[0]));
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  getProfeByQR,
}