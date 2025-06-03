import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json()); // To parse JSON data from requests

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow multiple frontends
    credentials: true,
  })
);

// Session Configuration
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// MongoDB Connection
async function connectDB() {
    try {
      await mongoose.connect("mongodb://localhost:27017/Jarrys"); // Removed deprecated options
      console.log("✅ Connected to MongoDB");
    } catch (error) {
      console.error("❌ MongoDB Connection Error:", error);
      process.exit(1);
    }
  }
  connectDB();

// Routes
app.use("/auth", authRoutes);

// Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
