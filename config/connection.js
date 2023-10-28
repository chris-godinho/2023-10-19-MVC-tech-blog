const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.DATABASE_URL) {
  const { hostname, port, username, password, pathname } = new URL(process.env.DATABASE_URL);
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: hostname,
    port: port,
    username: username,
    password: password,
    database: pathname.substring(1),
  });
} else {
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

/*
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
  }
);
*/

module.exports = sequelize;
