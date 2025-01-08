import "dotenv/config";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./DB/connectDB.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  connectDB();
  console.log(`serve is running on port ${PORT}`);
});
