import { Model, Optional } from "sequelize";
import db from '../../models/index';
import { MAGIC_STRINGS } from "../enumerations/MagicStringsEnum";


// These are all the attributes in the User model
interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    passwordHash: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export class User extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    id!: number;
    firstName!: string;
    lastName!: string;
    emailAddress!: string;
    passwordHash!: string;
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

// @ts-ignore
export const UserModel = db[MAGIC_STRINGS.nameOfUserModel] as typeof User;