import { User } from "../Models/User.js";
import PasswordHash from "../utils/Password_hash.js";

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

const updateTheGivenFields = async (body, id) => {
  const { first_name, last_name, username, password } = body;

  console.log("Authenticated Body");

  const hashedPassword = await PasswordHash.toHash(password);

  console.log("Inside Update The Given Fields");

  try {
    await User.update(
      {
        first_name,
        last_name,
        password: hashedPassword,
        username,
        account_updated: Date.now(),
      },
      {
        where: {
          id: id,
        },
      }
    );

    const response = await User.findByPk(id);

    return await response;
  } catch (err) {
    console.error("Failed To Extract");
  }
};

export {
  userCreate,
  getAllUsers,
  findIfEmailExists,
  getUserById,
  updateTheGivenFields,
};
