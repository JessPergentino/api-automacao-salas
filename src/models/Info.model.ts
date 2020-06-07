import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "informacoes" })
export default class Info extends Model<Info> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  sala: string

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  luminosidade: string;

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  temperatura: string;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
    validate: {
      notEmpty: true,
    },
  })
  lampada: boolean;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
    validate: {
      notEmpty: true,
    },
  })
  arCondicionado: boolean;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
    validate: {
      notEmpty: true,
    },
  })
  pessoas: boolean;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}
