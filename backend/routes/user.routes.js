import express from "express"
import { signup, login, checkAuth } from "../controllers/user.controller.js";

const router = express.Router();


router.post("/signup",signup); //works
router.post("/login",login); //works

export default router;