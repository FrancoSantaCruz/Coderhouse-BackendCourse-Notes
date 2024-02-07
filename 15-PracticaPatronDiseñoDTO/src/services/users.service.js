import { usersMongo } from "../DAOs/users.mongo.js";
import { hashData } from "../utils.js";

class UsersService {
    async findAll(){
        const users = await usersMongo.getAll();
        return users;
    };
    async findById(id){
        const user = await usersMongo.getById(id);
        return user;
    };
    async findByEmail(email){
        const user = await usersMongo.getByEmail(email);
        return user;
    };
    async createOne(obj){
        const { password } = obj;
        const hashedPassword = await hashData(password);
        const newUser = await usersMongo.createOne({...obj, password: hashedPassword});
        return newUser;
    };
    async updateOne(obj){
        const { id, ...userInfo} = obj;
        const response = await usersMongo.updateOne(id, userInfo);
        return response;
    };
    async deleteOne(id){
        const removedUser = await usersMongo.deleteOne(id);
        return removedUser;
    };
};

export const usersService = new UsersService();