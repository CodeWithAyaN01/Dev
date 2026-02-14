import "dotenv/config";
import express from "express";
import { connectMongoDB } from "./connection.js";
import userRouter from "./router/user.routes.js";
const PORT = 8000;
const app = express();

// making connection to MongoDB
connectMongoDB(process.env.MONGODB_URL).then(() => {
  console.log(`MongoDB connected`);
});

// MiddleWare & Routes
app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Running... PORT: ${PORT}`);
});
