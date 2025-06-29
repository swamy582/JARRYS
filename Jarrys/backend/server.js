import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ✅ CORS Configuration (add your frontend URL here)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://jarrys-frontend.onrender.com" // ✅ Replace with your real frontend URL
    ],
    credentials: true,
  })
);

// ✅ Body Parser
app.use(express.json());

// ✅ Session
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// ✅ MongoDB Connection
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Jarrys");
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}
connectDB();

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
