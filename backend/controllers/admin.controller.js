import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import Admin from "../models/admin.model.js";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ error: "Enter email and password" });
    }
    const isAdmin = await Admin.findOne({ email });
    if (!isAdmin) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    if (isAdmin.password !== password) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    generateTokenAndSetCookie(isAdmin, res);
    res.status(200).json({message:`Logged in successfully`});
  } catch (error) {
    console.log(`Error in Login Controller ${error.message}`);
    res.status(500).json({ error: `Internal Server Error` });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(`Error in Logout controller ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
