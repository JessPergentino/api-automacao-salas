import { Sequelize } from "sequelize-typescript";
import Info from "./models/Info.model";

const sequelize = new Sequelize({
  database: "iot_bd",
  username: "postgres",
  password: "postgresql",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

sequelize.addModels([Info]);

export default sequelize;
