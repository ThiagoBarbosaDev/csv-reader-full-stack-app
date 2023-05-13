import { Options } from 'sequelize';
import 'dotenv/config';
console.log(process.env.MYSQL_PORT)
const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'shopper',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: 'mysql',
}

export = config;