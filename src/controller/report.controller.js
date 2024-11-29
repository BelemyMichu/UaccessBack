import generateReport from "../model/reportes.model.js";

export const createReport = async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res
        .status(400)
        .json({ message: "El campo 'input' es obligatorio." });
    }

    console.log("Generando reporte para:", input);

    const pdfPath = await generateReport(input);

    // Enviar respuesta indicando éxito y ubicación del archivo generado.
    return res.status(201).json({
      message: "Reporte generado correctamente.",
      pdfPath,
    });
  } catch (error) {
    console.error("Error en el controlador de reportes:", error);
    return res.status(500).json({
      message: "Ocurrió un error al generar el reporte.",
      error: error.message,
    });
  }
};
