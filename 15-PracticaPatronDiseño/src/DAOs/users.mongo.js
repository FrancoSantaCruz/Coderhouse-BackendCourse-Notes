import { usersModel } from "../models/users.model.js";
import { BasicMongo } from "./basic.mongo.js";

class UsersMongo extends BasicMongo {
    constructor() {
        super(usersModel);
    }
    async getByEmail(email){
        return usersModel.findOne({email});
    }
}

export const usersMongo = new UsersMongo();