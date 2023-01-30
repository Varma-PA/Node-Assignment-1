import { Router } from "express";
import { encryptPassword } from "../middleware/EncryptPassword.js";
import { findIfEmailExistsMiddleWare } from "../middleware/FindEmail.js";
import { userCreate, getAllUsers } from "../service/UserService.js";

const router = Router();

router.post(
  "/create",
  findIfEmailExistsMiddleWare,
  encryptPassword,
  async (request, response) => {
    const returnedData = await userCreate(request.body);
    response.send(returnedData);
  }
);

router.get("/", async (request, response) => {
  const returnedData = await getAllUsers();
  response.send(returnedData);
});

export { router as userRouter };
