import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRouter from "./routes/auth.routes.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

connectDB();

app.use("/api/users", userRouter)

app.get("/", (req, res) => {
  res.send("API is running...");
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
