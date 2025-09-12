import express from "express";
import authTechnician from "../middlewares/authTechnician.js";
import {alltasks, task, startTask, resolveTask, logintech} from "../controllers/technician.controller.js"
const router = express.Router()


router.post("/login",  logintech) //works
router.get("/alltasks", authTechnician, alltasks) //works
router.get("/tasks/:id", authTechnician, task) //works
router.patch("/tasks/:id/start", authTechnician, startTask) //works
router.patch("/tasks/:id/resolve", authTechnician, resolveTask) //works


export default router;