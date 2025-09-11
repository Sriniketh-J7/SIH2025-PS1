import express from "express";
import authTechnician from "../middlewares/authTechnician.js";
import {alltasks, task, startTask, updateTask, resolveTask, signuptech, logintech} from "../controllers/technician.controller.js"
const router = express.Router()

//
router.post("/signup", signuptech)
router.post("/login",  logintech)
router.get("/alltasks", authTechnician, alltasks)
router.get("/tasks/:id", authTechnician, task)
router.patch("/tasks/:id/start", authTechnician, startTask)
router.patch("/tasks/:id/update", authTechnician, updateTask)
router.patch("/tasks/:id/resolve", authTechnician, resolveTask)


export default router;