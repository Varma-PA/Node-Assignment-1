import BadRequestException from "../errors/BadRequest.js";
import InvalidEmail from "../errors/InvalidEmail.js";

const checkEmailRegex = async (req, res, next) => {
  const { username, password } = req.body;

  if (username === "") {
    throw new BadRequestException("Username not given");
  }

  const emailRegex = new RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  if (!emailRegex.test(username)) {
    throw new InvalidEmail("Please give valid email");
  }

  //   // Min 8 Characters, At least one letter and one number
  //   const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/);

  //   if (!passwordRegex.test(password) || password === "") {
  //     throw new BadRequestException(
  //       "Please give valid english alphabet and one number in the password with min length of 3"
  //     );
  //   }

  next();
};

export { checkEmailRegex };
