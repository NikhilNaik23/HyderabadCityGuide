import express from "express";
import {
  createAttractions,
  deleteAttraction,
  getAllAttractions,
  updateAttractions,
} from "../controllers/attraction.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import upload from "../middleware/upload.js";
const router = express.Router();
router.post("/", protectRoute, upload.single("image"), createAttractions);
router.get("/", getAllAttractions);
router.put(
  "/update/:id",
  protectRoute,
  upload.single("image"),
  updateAttractions
);
router.delete("/delete/:id", protectRoute, deleteAttraction);
export default router;
