import express from "express";
import {
  createFood,
  getAllFood,
  updateFood,
  deleteFood,
} from "../controllers/food.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", protectRoute, upload.single("image"), createFood);
router.get("/", getAllFood);
router.put("/update/:id", protectRoute, upload.single("image"), updateFood);
router.delete("/delete/:id", protectRoute, deleteFood);

export default router;
