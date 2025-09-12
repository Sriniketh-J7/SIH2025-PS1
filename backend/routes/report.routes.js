import express from "express";
const router = express.Router();

import { allReports, createReport, myReports, singleReport } from "../controllers/report.controller.js";
import auth from "../middlewares/auth.js"
import { uploadreport } from "../middlewares/uploadreport.js";


router.post("/create",auth, uploadreport, createReport);
router.get("/myReports", auth, allReports)
router.get("/singleReport/:id", auth, singleReport)
export default router;
