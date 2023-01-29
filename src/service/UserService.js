import { User } from "../Models/User.js";

const UserCreate = (body) => {
  const { firstName, lastName } = body;

  User.create({
    firstName,
    lastName,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error("Failed to create");
    });
};

export { UserCreate };
