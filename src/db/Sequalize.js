import { Sequelize } from "sequelize";

const sequalize = new Sequelize("USER", "root", "test1234", {
  host: "localhost",
  dialect: "mysql",
});

export { sequalize };
