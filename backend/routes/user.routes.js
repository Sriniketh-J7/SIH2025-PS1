import express from "express"
import { signup, login } from "../controllers/user.controller.js";

const router = express.Router();


router.post("/signup",signup); //works
router.post("/login",login); //works

export default router;