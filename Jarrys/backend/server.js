import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ✅ Environment variables
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Jarrys";
const SESSION_SECRET = process.env.SESSION_SECRET || "dev_secret_key";

// ✅ CORS Setup (local + deployed frontend)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://jarrys-frontend.onrender.com" // ✅ Your deployed frontend
    ],
    credentials: true,
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Session setup using MongoDB (connect-mongo)
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      sameSite: "none",            // important for cross-origin cookie
      secure: true,                // only over HTTPS (Render is HTTPS)
    },
  })
);

// ✅ MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}
connectDB();

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
