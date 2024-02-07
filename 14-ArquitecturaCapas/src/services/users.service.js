import { usersManager } from "../persistencia/DAOs/memDAO/users.manager.js";
import { hashData } from "../utils.js";
import UsersDTO from "../persistencia/DTOs/users.DTO.js";

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
    const userDTO = new UsersDTO( { ...obj, password: hashPassword } )
    const createdUser = usersManager.createOne(userDTO);
    const response = {
        fullname: createdUser.fullname,    
        email: createdUser.email,
        password: createdUser.password
    };
    // welcome_msg: `Welcome ${createdUser.first_name} ${createdUser.last_name}`,
    return response;
}