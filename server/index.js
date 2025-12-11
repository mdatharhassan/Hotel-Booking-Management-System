import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoDB.js";
import authRouter from "./routes/auth.js";
import bookingRouter from "./routes/booking.js";
import cabinRouter from "./routes/cabin.js";
import settingRouter from "./routes/settings.js";
const app = express();

// Load environment variables from .env file
dotenv.config();

// Cors configuration
const corsOptions = {
  origin: ["http://localhost:5173", process.env.FRONTEND_WEB],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

// Middleware to parse JSON requests
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/cabins", cabinRouter);
app.use("/api/settings", settingRouter);

connectDB(process.env.MONGO_URL);
app.listen(5000);

const handler = app;
export default handler;
