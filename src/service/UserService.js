import { User } from "../Models/User.js";

const userCreate = async (body) => {
  const { firstName, lastName, email, password } = body;

  try {
    const response = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return await response;
  } catch (err) {
    console.log("Failed to create");
  }
};

const getAllUsers = async () => {
  try {
    const response = await User.findAll({
      attributes: ["firstName", "lastName", "email"],
    });
    return await response;
  } catch (err) {
    console.log("Failed to extract");
  }
};

export { userCreate, getAllUsers };
