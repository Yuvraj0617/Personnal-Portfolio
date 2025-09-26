import express from "express";
import { updatedOverview, getOverview } from "../controllers/overview.controller.js";
const router = express.Router();

//  PATCH create overview
router.patch("/:id",updatedOverview );


//  GET all overviews
router.get("/", getOverview);


export default router;

