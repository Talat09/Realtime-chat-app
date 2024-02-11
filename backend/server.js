//package
import express from "express";
import dotenv from "dotenv";
//file
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToMongoDB.js";
//variables
const app = express();
const PORT = process.env.PORT || 5000;
//middleware
dotenv.config();
app.use(express.json()); //to parse the incoming request with JSON payloads(from req.body)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server Running on port ${PORT} `);
});
