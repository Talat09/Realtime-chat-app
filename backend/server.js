import authRoutes from "./routes/auth.routes.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT} `));
