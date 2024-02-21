import BasicDao from "./basic.dao.js";
import { usersModel } from "../models/users.model.js";

class UsersDao extends BasicDao {
    constructor(){
        super(usersModel, ["courses"]);
    };

    async getByEmail(email){
        return await usersModel.findOne({email});
    };
};

export const usersDao = new UsersDao();