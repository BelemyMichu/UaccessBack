import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";
import reportRoutes from "./routes/report.routes.js";
import clasesRoutes from "./routes/asistencia.routes.js";

const app = express();

// Middlewares
app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: true })); // Para parsear datos urlencoded
app.use(morgan("dev")); // Para logging
app.use(cors({ origin: "*" })); // Para habilitar CORS
app.use(helmet()); // Para mejorar la seguridad

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/clases", clasesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Mitchu!" });
});

export default app;
