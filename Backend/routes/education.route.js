import Express from "express";
import { createEducation, getEducation,deleteEducation } from "../controllers/education.controller.js";
const router = Express.Router();

//Post route
router.post("/", createEducation);
//Delete Route
router.delete("/:id", deleteEducation);

// Get Route
router.get("/", getEducation);
export default router;
