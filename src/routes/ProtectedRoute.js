import { Router } from "express";
import { checkAuthorization } from "../middleware/CheckAuthorization.js";
import { getUserById } from "../service/UserService.js";

const router = Router();

router.put("/update", checkAuthorization, (req, res) => {
  const { username, firstName, lastName, password } = req.response;

  res.send({ email, firstName, lastName });
});

router.get("/v1/user/:userId", checkAuthorization, async (req, res) => {
  const userDetails = await getUserById(req.params.userId);

  delete userDetails.dataValues["password"];

  res.status(200).send(userDetails);
});

export { router as ProtectedRoutes };
