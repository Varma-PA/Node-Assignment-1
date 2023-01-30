import PasswordHash from "../utils/Password_hash.js";

const encryptPassword = async (req, res, next) => {
  const { password } = req.body;

  console.log("Inside the middleware");

  const encryptedPassword = await PasswordHash.toHash(password);

  req.body["password"] = await encryptedPassword;

  next();
};

export { encryptPassword };
