import { Router } from "express";
import {getHomePage,sendEmail} from "../controllers/home.controller.js";
const router = Router();

router.get("/", getHomePage);
router.post("/contact", sendEmail);

export default router;
