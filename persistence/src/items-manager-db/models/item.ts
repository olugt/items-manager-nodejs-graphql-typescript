import { DataTypes, Model, Sequelize } from "sequelize";
import { Optional } from "sequelize/types";
import { dbModelsType } from '../main/types/dbModelsType';

interface ItemAttributes {
  id: number;
  title: string;
  userId: number;
}

interface ItemCreationAttributes extends Optional<ItemAttributes, "id"> { }

export class Item extends Model<ItemAttributes, ItemCreationAttributes>
  implements ItemAttributes {
  id!: number;
  title!: string;
  userId!: number;

  static associate(models: dbModelsType) {
    // define association here
  }
};

// This is used in index.js.
export const processModel = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  Item.init({
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true
    },
    title: dataTypes.STRING,
    userId: dataTypes.INTEGER
  }, {
    sequelize,
    modelName: Item.name
  });

  return Item;
};