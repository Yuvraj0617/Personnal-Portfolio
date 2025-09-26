// ##After this route work will be done set in in index.js....
import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import { createProject, getProject,deleteProject} from "../controllers/project.controller.js";
const router = Router();

router.post("/", upload.single("projectImage"), createProject);
router.delete("/:id", deleteProject);
router.get("/", getProject);
export default router;
