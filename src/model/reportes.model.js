import openai from "../openai.js";
import fs from "fs";
import PDFDocument from "pdfkit";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
// Configuración de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

const generateReport = async (input) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres un asistente especializado en generar reportes detallados basados en datos académicos de uso de salas y asistencia de profesores. Tu tarea es generar un análisis completo que incluya la siguiente información sin descripciones innecesarias sobre asignaturas o profesores: 1) Un resumen ejecutivo con tendencias clave o alertas. 2) Un análisis de la asistencia de los profesores, incluyendo el número total de profesores registrados, y un porcentaje de asistencia puntual vs. tardía. 3) Un análisis sobre el uso de las salas, destacando las más y menos utilizadas, y su ocupación por hora y edificio. 4) Un análisis de tendencias y patrones, como horarios pico de ocupación de salas, variación en el uso de salas por días de la semana, y periodos con más incidencias de impuntualidad. 5) Alertas o recomendaciones sobre posibles ajustes en la asignación de salas por sobreuso o subutilización, profesores con alta frecuencia de impuntualidad, o mejora en la sincronización de horarios para evitar retrasos. El lenguaje debe ser técnico, claro y conciso.",
        },
        {
          role: "user",
          content: `Genera el análisis de los datos académicos basado en los siguientes datos (No escribas en MARKDOWN): ${input}`,
        },
      ],
    });

    const data = response.choices[0].message.content;
    const pdfPath = "./reporte_profesional.pdf";
    const doc = new PDFDocument({ margin: 50 });

    doc
      .font("Times-Roman")
      .fontSize(14)
      .text("Reporte de Uso de Salas y Asistencia de Profesores", {
        align: "center",
      });
    doc.moveDown(2);
    doc.fontSize(12).text(data, { align: "justify" });
    doc.end();

    doc.pipe(fs.createWriteStream(pdfPath));
    console.log(`Reporte profesional generado correctamente en: ${pdfPath}`);

    const file = fs.readFileSync(pdfPath);

    const { data: uploadData, error } = await supabase.storage
      .from("Reporte") // Reemplaza con tu bucket de Supabase
      .upload("informes/reporte_profesional.pdf", file, {
        contentType: "application/pdf",
      });

    if (error) {
      throw error;
    }

    console.log("Archivo subido correctamente a Supabase:", uploadData);

    return uploadData;
  } catch (error) {
    console.error("Error al generar o subir el reporte:", error.message);
    throw error;
  }
};

export default generateReport;
