const { Sequelize } = require("sequelize");
const env = require('dotenv').config();
if (env.error) {
    throw env.error;
}

const DB_name = process.env.database;
const USER_NAME = process.env.user;
const PASSWORD = process.env.password;
const HOST = process.env.host;


if (!DB_name || !USER_NAME || !PASSWORD || !HOST) {
    throw new Error("Database configuration variables are missing.");
}

const sequelize = new Sequelize(DB_name, USER_NAME, PASSWORD, {
    dialect: 'postgres',
    host: HOST,
});


module.exports = sequelize;
