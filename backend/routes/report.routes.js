import express from "express";
const router = express.Router();

import { createReport, myReports } from "../controllers/report.controller.js";
import auth from "../middlewares/auth.js"
import { uploadreport } from "../middlewares/uploadreport.js";


//
router.post("/create",auth, uploadreport, createReport);
router.get("/myReports", auth, myReports)
export default router;
