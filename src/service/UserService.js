import { User } from "../Models/User.js";

const userCreate = async (body) => {
  const { first_name, last_name, username, password } = body;

  const account_created = Date.now();

  const account_updated = Date.now();

  try {
    const response = await User.create({
      first_name,
      last_name,
      username,
      password,
      account_created,
      account_updated,
    });

    return await response;
  } catch (err) {
    console.error("Failed to create");
  }
};

const getUserById = async (userId) => {
  try {
    const response = await User.findByPk(userId);
    return await response;
  } catch (err) {
    console.error("Failed to Extract by Id: " + err);
  }
};

const getAllUsers = async () => {
  try {
    const response = await User.findAll({
      attributes: ["firstName", "lastName", "email"],
    });
    return await response;
  } catch (err) {
    console.error("Failed to extract");
  }
};

const findIfEmailExists = async (username) => {
  try {
    const response = await User.findOne({ where: { username } });
    return await response;
  } catch (err) {
    console.error("Failed to extract");
  }
};

const updateTheGivenFields = async (body) => {};

export { userCreate, getAllUsers, findIfEmailExists, getUserById };
