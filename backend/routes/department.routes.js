import express from "express"
import { allReports, assignTechnician, getAllTechnicians, SingleReport } from "../controllers/department.controller"

const deptRouter = express.Router()

deptRouter.get("/allreports", allReports)
deptRouter.get("/singleReport/:id", SingleReport);
deptRouter.patch("/assignTechnician/:reportId/:technicianId",assignTechnician)
deptRouter.get("allTechnicians", getAllTechnicians)