import "dotenv/config";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./DB/connectDB.js";
import messagesRoutes from "./routes/messages.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,  
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messagesRoutes);

app.listen(5000, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
