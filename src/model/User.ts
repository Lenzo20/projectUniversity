import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'

class Pessoa extends Model {
  declare id: number
}

Pessoa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    biOrCpf: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    birthDay: {
      type: DataTypes.DATE,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Pessoa',
  },
)

sequelize.sync()
