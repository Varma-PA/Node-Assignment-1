import { DataTypes } from "sequelize";
import { sequalize } from "../db/Sequalize.js";

const User = sequalize.define("users", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

const sync = () => {
  sequalize
    .sync()
    .then(() => {
      console.log("User Table Created");
    })
    .catch((err) => {
      console.error("Unable to create table: " + err);
    });
};

export { sync, User };
