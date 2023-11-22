import { usersModel } from '../db/models/users.model.js'

class UsersManager {
    async getById(id){
        const res = await usersModel.findById(id);
        return res;
    }
    async createOne(obj){
        const res = await usersModel.create(obj)
        return res;
    }
    async getByEmail(email){
        const res = await usersModel.findOne({email})
        return res;
    }
}

export const usersManager = new UsersManager();