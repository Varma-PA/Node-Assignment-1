import express from "express";
import bodyparser from "body-parser";
import { userRouter } from "./routes/userRoute.js";

const app = express();

app.use(bodyparser.json());

app.use(userRouter);

export { app };
