import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'universit',
  'postgres',
  'Ozielbenny200*',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // porta padrao
  },
)
