import Food from "../models/food.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createFood = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name?.trim() || !description?.trim() || !category?.trim()) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    let imageUrl = "";

    if (req.file) {
      const uploadedImage = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );
      imageUrl = uploadedImage.secure_url;
    } else {
      return res.status(400).json({ error: "Image is required" });
    }

    const newFood = new Food({
      name,
      description,
      image: imageUrl,
      category,
    });

    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    console.error("Error in createFood:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllFood = async (req, res) => {
  try {
    const foodItems = await Food.find({}).sort({ createdAt: -1 });
    return res.status(200).json(foodItems);
  } catch (error) {
    console.error("Error in getAllFood:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Food ID is required" });
    }

    const food = await Food.findById(id);
    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }

    let imageUrl = food.image;

    if (req.file) {
      const imgId = food.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);

      const uploadedImage = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      imageUrl = uploadedImage.secure_url;
    }

    food.name = name || food.name;
    food.description = description || food.description;
    food.category = category || food.category;
    food.image = imageUrl;

    const updatedFood = await food.save();

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error("Error in updateFood:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);

    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }

    if (food.image) {
      const imgId = food.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }

    await Food.findByIdAndDelete(id);

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    console.error("Error in deleteFood:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
