import Attraction from "../models/attraction.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createAttractions = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name?.trim() || !description?.trim()) {
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

    const newAttraction = new Attraction({
      name,
      description,
      image: imageUrl,
    });

    await newAttraction.save();
    res.status(201).json(newAttraction);

  } catch (error) {
    console.error("Error in createAttraction:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export const getAllAttractions = async (req, res) => {
  try {
    const Attractions = await Attraction.find({}).sort({ createdAt: -1 });
    if (Attractions.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(Attractions);
  } catch (error) {
    console.error("Error in createAttraction:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateAttractions = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Attraction ID is required" });
    }

    const attraction = await Attraction.findById(id);
    if (!attraction) {
      return res.status(404).json({ error: "Attraction not found" });
    }

    let imageUrl = attraction.image; // Keep existing image by default

    if (req.file) {
      // Optionally delete old image from Cloudinary
      const imgId = attraction.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);

      const uploadedImage = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      imageUrl = uploadedImage.secure_url;
    }

    // Update attraction fields
    attraction.name = name || attraction.name;
    attraction.description = description || attraction.description;
    attraction.image = imageUrl;

    const updatedAttraction = await attraction.save();

    res.status(200).json(updatedAttraction);
  } catch (error) {
    console.error("Error in updateAttractions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteAttraction = async (req, res) => {
    try {
      const { id } = req.params;
      const attraction = await Attraction.findById(id);
  
      if (!attraction) {
        return res.status(404).json({ error: "Attraction not found" });
      }
      console.log("Attraction ID:", id);
      console.log("Attraction found:", attraction);

  
      if (attraction.image) {
        const imgId = attraction.image.split("/").pop().split(".")[0];
        console.log("Image ID:", imgId);  // Log the image ID
        await cloudinary.uploader.destroy(imgId);
      }
      
      const deletedAttraction = await Attraction.findByIdAndDelete(id);
      if (!deletedAttraction) {
        console.log("Attraction deletion failed");
        return res.status(404).json({ error: "Attraction not found or not deleted" });
      }
      console.log("Attraction deleted:", deletedAttraction);
      

  
      res.status(200).json({ message: "Attraction deleted successfully" });
    } catch (error) {
      console.error("Error in deleteAttraction:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  