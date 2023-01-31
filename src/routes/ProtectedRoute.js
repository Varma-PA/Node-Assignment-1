import { Router } from "express";
import CustomError from "../errors/CustomError.js";
import ForbiddenAccess from "../errors/ForbiddenAccess.js";
import { checkAuthorization } from "../middleware/CheckAuthorization.js";
import { getUserById, updateTheGivenFields } from "../service/UserService.js";

const router = Router();

// router.put("/update", checkAuthorization, (req, res) => {
//   const { username, firstName, lastName, password } = req.response;

//   res.send({ email, firstName, lastName });
// });

router.get("/v1/user/:userId", checkAuthorization, async (req, res) => {
  const userDetails = await getUserById(req.params.userId);

  delete userDetails.dataValues["password"];

  res.status(200).send(userDetails);
});

router.put("/v1/user/:userId", checkAuthorization, async (req, res) => {
  const { id } = req.response;

  if (id.toString() !== req.params.userId) {
    throw new ForbiddenAccess("Forbidden Access");
  }

  const response = await updateTheGivenFields(req.body, req.params.userId);

  res.status(204).send();
});

export { router as ProtectedRoutes };
