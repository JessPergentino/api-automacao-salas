import { Sequelize } from "sequelize-typescript";
import Info from "./models/Info.model";

const sequelize = new Sequelize({
  database: "iot_bd",
  username: "postgres",
  password: "postgresql",
  host: "192.168.1.67",
  dialect: "postgres",
});

sequelize.addModels([Info]);

export default sequelize;
