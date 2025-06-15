const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');


const sequelize = new Sequelize(
  dbConfig.db.database,
  dbConfig.db.user,
  dbConfig.db.password,
  {
    host: dbConfig.db.host,
    dialect: 'postgres',
    port: dbConfig.db.port,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);

module.exports = db;
