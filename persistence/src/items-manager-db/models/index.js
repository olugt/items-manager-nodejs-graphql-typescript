// @ts-check

'use strict';

const fs = require('fs');
const path = require('path');
const relativeDbDirectoryMain = "../../../src/items-manager-db";
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, relativeDbDirectoryMain, "config/config.json"))[env];


/** 
 * @type {{sequelize: Sequelize, Sequelize: typeof Sequelize}}
 */
const db = {};

/**
 * @type {Sequelize}
 */
let sequelize;
if (config.use_env_variable) {
  // @ts-ignore
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize = new Sequelize({ dialect: config.dialect, storage: path.join(__dirname, relativeDbDirectoryMain, config.storage) });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).processModel(sequelize, DataTypes);
    // @ts-ignore
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  // @ts-ignore
  if (db[modelName].associate) {
    // @ts-ignore
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
