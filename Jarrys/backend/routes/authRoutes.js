import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ name, email, password: hashedPassword, phone });
    await newUser.save();
    req.session.user = newUser;
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: "User already exists!" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User not found!" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password!" });

  req.session.user = user;
  res.json({ message: "Login successful!", user });
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out successfully!" });
});

export default router;
