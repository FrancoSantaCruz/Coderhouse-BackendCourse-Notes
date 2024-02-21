import { usersDao } from "../DAOs/users.dao.js";
import { hashData, CustomError, ErrorMessages } from "../utils/index.js";

export const findAll = async () => {
    return await usersDao.getAll();
};

export const findById = async (id) => {
    const user = await usersDao.getById(id);
    if(!user){
        await CustomError.createError(ErrorMessages.USER_NOT_EXISTS, ErrorMessages.ISSUE_SESSION);
    }
    return user;
};

/*
 *  La generación del password es debatible ya que este servicio es para la creación de un user manualmente
 *  por lo tanto en este caso le estamos dando la opción al encargado de hacerlo de agregar una contraseña 
 *  a su elección pero también se podría hacer que se envíe un mail y el usuario ponga su contraseña 
 *  o colocar una contraseña random y que el usuario deba cambiarla para conocerla.
 */
export const createOne = async (userInfo) => {
    const { email, password } = userInfo;
    const user = await usersDao.getByEmail(email);
    if(user){
        await CustomError.createError(ErrorMessages.USER_EXISTS, ErrorMessages.ISSUE_SESSION);
    };
    const hashedPassword = await hashData(password);
    const newUser = await usersDao.create({...userInfo, password: hashedPassword});

    return { user: newUser };
};

export const modifyOne = async (userInfo) => {
    const { id, ...data } = userInfo;
    if(!id){
        await CustomError.createError(ErrorMessages.MISSING_DATA , ErrorMessages.ISSUE_USER);
    }
    return await usersDao.modify(id, data);
};

export const deleteOne = async (id) => {
    return await usersDao.delete(id);
};
