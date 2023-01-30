import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { email } = req.body;

  const base64Encoded = Buffer.from(email).toString("base64");

  res.send({ base64Encoded });
});

export { router as SignInRouter };
