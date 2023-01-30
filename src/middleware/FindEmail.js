import SameEmailFound from "../errors/SameEmailFound.js";
import { findIfEmailExists } from "../service/UserService.js";

const findIfEmailExistsMiddleWare = async (req, res, next) => {
  const { email } = req.body;

  const response = await findIfEmailExists(email);

  if (response) {
    throw new SameEmailFound(`Given email is already taken:  ${email}`);
  } else {
    next();
  }
};

export { findIfEmailExistsMiddleWare };
