import { Router } from "express";
import { checkEmailRegex } from "../middleware/EmailRegexMiddleware.js";
import { encryptPassword } from "../middleware/EncryptPassword.js";
import { findIfEmailExistsMiddleWare } from "../middleware/FindEmail.js";
import { checkPasswordRegex } from "../middleware/PasswordRegexMiddleWare.js";
import { userCreate, getAllUsers } from "../service/UserService.js";

const router = Router();

router.post(
  "/v1/user",
  checkEmailRegex,
  checkPasswordRegex,
  findIfEmailExistsMiddleWare,
  encryptPassword,
  async (request, response) => {
    const returnedData = await userCreate(request.body);

    delete returnedData["password"];

    response.status(201).send(returnedData);
  }
);

router.get("/healthz", async (request, respond) => {
  respond.status(200).send();
});

export { router as userRouter };
