import { Sequelize } from "sequelize/types";
import * as dbManager from "../../models/index";

/**
 * This is to formalize for other code the db exported from "../../models/index.js" file.
 */
export type dbManagerType = typeof dbManager;