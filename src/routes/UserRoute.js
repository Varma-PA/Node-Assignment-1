import { Router } from "express";
import { UserCreate } from "../service/UserService.js";

const router = Router();

router.post("/create", (request, response) => {
  const { firstName, lastName } = request.body;

  UserCreate(request.body);

  response.send({ firstName, lastName });
});

export { router as userRouter };
