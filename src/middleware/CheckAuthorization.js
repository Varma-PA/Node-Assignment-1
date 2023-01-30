import NotAuthorizedError from "../errors/NotAuthorized.js";
import { findIfEmailExists } from "../service/UserService.js";

const checkAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization === undefined) {
    throw new NotAuthorizedError("Authorization code not found");
  }

  const authorizationToken = authorization.split(" ")[1];

  console.log("This is the Authorized Code: " + authorizationToken);

  const email = Buffer.from(authorizationToken, "base64").toString();

  console.log("This is the email " + email);

  const response = await findIfEmailExists(email);

  if (response === null) {
    throw new NotAuthorizedError("Invalid Email or Password");
  }

  req.response = response;

  next();
};

export { checkAuthorization };
