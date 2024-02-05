import { usersManager } from "../persistencia/users.manager.js";
import { hashData } from "../utils.js";

export const findAll = () => {
    const users = usersManager.findAll()
    return users
}

export const findById = (id) => {
    const user = usersManager.findById(id)
    return user
}   

export const createOne = (obj) => {
    const hashPassword = hashData(obj.password)
    const createdUser = usersManager.createOne({
        ...obj,
        password: hashPassword
    });
    const response = {
        welcome_msg: `Welcome ${createdUser.first_name} ${createdUser.last_name}`,
        email: createdUser.email,
        password: createdUser.password
    };
    return response;
}