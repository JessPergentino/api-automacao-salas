import { Sequelize } from "sequelize-typescript";
import Info from "./models/Info.model";

const sequelize = new Sequelize({
  database: "iot_bd",
  username: "postgres",
  password: "postgresql",
  host: "dbaf5aad0c1b.ngrok.io",
  dialect: "postgres",
});

sequelize.addModels([Info]);

export default sequelize;
