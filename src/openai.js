import OpenAI from "openai";
import config from "./config.js";

// Configuración de la API de OpenAI.
const configuration = {
  apiKey: config.OPENAIKEY,
};

// Instancia de la clase OpenAI.
const openai = new OpenAI(configuration);

export default openai;
