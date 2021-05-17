import { DataTypes, Model, Sequelize } from "sequelize";
import { Optional } from "sequelize/types";
import { Item } from "./item";
import { dbManagerType } from '../main/types/dbManagerType';
import { getProcessedModel } from '../main/logic/modelLogic';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  passwordHash: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

/**
 * The user model type.
 */
export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  id!: number;
  firstName!: string;
  lastName!: string;
  emailAddress!: string;
  passwordHash!: string;

  static associate(dbManager: dbManagerType) {
    // define association here
    const ItemModel = getProcessedModel(dbManager, Item);
    User.hasMany(ItemModel);
  }
};

// This is used in index.js.
export const processModel = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  User.init({
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true
    },
    firstName: dataTypes.STRING,
    lastName: dataTypes.STRING,
    emailAddress: dataTypes.STRING,
    passwordHash: dataTypes.STRING
  }, {
    sequelize,
    modelName: User.name
  });

  return User;
};