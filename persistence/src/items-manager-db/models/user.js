// @ts-check

'use strict';
const {
  Model, DataTypes, Sequelize
} = require('sequelize');
const { MAGIC_STRINGS } = require('../main/enumerations/MagicStringsEnum');

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // @ts-ignore
  static associate(models) {
    // define association here
  }
};

module.exports = 
/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes 
 * @returns {User}
 */
(sequelize, DataTypes) => {
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: MAGIC_STRINGS.nameOfUserModel,
  });
  // @ts-ignore
  return User;
};