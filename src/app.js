import express from "express";
import bodyparser from "body-parser";
import "express-async-errors";
import { userRouter } from "./routes/userRoute.js";
import { errorHandler } from "./middleware/ErrorHandler.js";
import UrlNotFoundError from "./errors/UrlNotFound.js";

const app = express();

app.use(bodyparser.json());

app.use(userRouter);

app.all("*", async (req) => {
  throw new UrlNotFoundError(`Path Not found: ${req.url}`);
});

// Middlewares
app.use(errorHandler);

export { app };
