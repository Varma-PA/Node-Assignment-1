import { Router } from "express";
import { checkAuthorization } from "../middleware/CheckAuthorization.js";

const router = Router();

router.put("/update", checkAuthorization, (req, res) => {
  const { email, firstName, lastName } = req.response;

  res.send({ email, firstName, lastName });
});

export { router as ProtectedRoutes };
