import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// 🔐 Env Variables
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Jarrys";
const SESSION_SECRET = process.env.SESSION_SECRET || "dev_secret_key";

// 🌐 CORS Config
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://jarrys-frontend.onrender.com"
    ],
    credentials: true,
  })
);

// 🔄 Body Parser
app.use(express.json());

// 🧠 Sessions with MongoDB
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
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
      secure: true,
    },
  })
);

// 🔌 Connect DB
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  }
}
connectDB();

// 📦 Routes
app.use("/auth", authRoutes);

// 🚀 Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
