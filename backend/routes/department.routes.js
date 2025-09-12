import express from "express";
import {
  allReports,
  assignTechnician,
  getAllTechnicians,
  SingleReport,
  loginDept,
  newTech
} from "../controllers/department.controller.js";
import { checkDept } from "../middlewares/department.auth.js";

const deptRouter = express.Router();

deptRouter.post("/loginDept", loginDept); //works
deptRouter.get("/allreports",checkDept, allReports); // works
deptRouter.get("/singleReport/:id",checkDept, SingleReport); //works
deptRouter.get("/createTechnician",checkDept, newTech); //works
deptRouter.patch("/assignTechnician/:reportId/:technicianId",checkDept, assignTechnician); //works
deptRouter.get("/allTechnicians", checkDept, getAllTechnicians); //works

export default deptRouter;
