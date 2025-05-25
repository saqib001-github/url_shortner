import { Router } from "express";
import { getAllUserUrls } from "../controller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = Router();

router.post("/urls",authMiddleware, getAllUserUrls)

export default router