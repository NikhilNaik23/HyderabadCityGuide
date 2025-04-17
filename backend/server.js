import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors"

import AdminRoute from "./routes/admin.route.js";
import AttractionRoute from "./routes/attraction.route.js";
import FoodRoute from "./routes/food.route.js";
const app = express();
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
connectDB(process.env.MONGO_URI);
const PORT = process.env.PORT;
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/admin", AdminRoute);
app.use("/api/attraction", AttractionRoute);
app.use("/api/food", FoodRoute);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
