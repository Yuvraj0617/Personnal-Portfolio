import Express from "express";
const router = Express.Router();
import { AdminData, LoginPost,LoginGet } from "../controllers/login.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";

router.post("/login", LoginPost);
router.get("/me", AuthMiddleware, LoginGet);

//for Admin Data {email and password}...
router.post("/admin", AdminData);

export default router;
