//package
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
//file
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
//variables

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
//middleware
dotenv.config();
app.use(express.json()); //to parse the incoming request with JSON payloads(from req.body)
app.use(cookieParser()); //to parse the incoming request with cookies
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
//server listen
server.listen(PORT, () => {
  connectToDB();
  console.log(`Server Running on port ${PORT} `);
});
