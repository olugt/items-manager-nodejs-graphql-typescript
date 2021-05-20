import { User } from "./items-manager-db/models/user";
import { Item } from "./items-manager-db/models/item";
import * as dbManager from "./items-manager-db/models/index";
import { getProcessedModel } from './items-manager-db/extras/logic/modelLogic';

export const UserModel = getProcessedModel(dbManager, User);
export const ItemModel = getProcessedModel(dbManager, Item)