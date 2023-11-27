import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";

import "./database/database.js"

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });