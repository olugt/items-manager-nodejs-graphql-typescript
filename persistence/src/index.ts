import { User } from "./items-manager-db/models/user";
import { Item } from "./items-manager-db/models/item";
import * as dbModels from "./items-manager-db/models/index";
import { getModel } from './items-manager-db/main/logic/modelLogic';

export const UserModel = getModel(dbModels, User);
export const ItemModel = getModel(dbModels, Item);
