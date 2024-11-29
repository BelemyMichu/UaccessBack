import express from "express";
import { createReport } from "../controller/report.controller.js";

const router = express.Router();

router.post("/generate", createReport);

export default router;
