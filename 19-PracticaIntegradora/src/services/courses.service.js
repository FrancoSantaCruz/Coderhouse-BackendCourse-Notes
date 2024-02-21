import { coursesDao } from "../DAOs/courses.dao.js";
import { hashData, CustomError, ErrorMessages } from "../utils/index.js";

export const findAll = async () => {
    return await coursesDao.getAll();
};

export const findById = async (id) => {
    const course = await coursesDao.getById(id);
    if(!course){
        await CustomError.createError("Course doesn't exists.", "Course issue.");
    }
    return course;
};

/*
 *  La generación del password es debatible ya que este servicio es para la creación de un user manualmente
 *  por lo tanto en este caso le estamos dando la opción al encargado de hacerlo de agregar una contraseña 
 *  a su elección pero también se podría hacer que se envíe un mail y el usuario ponga su contraseña 
 *  o colocar una contraseña random y que el usuario deba cambiarla para conocerla.
 */
export const createOne = async (courseInfo) => {
    return await coursesDao.create(courseInfo);
};

export const modifyOne = async (courseInfo) => {
    const { id, ...data } = courseInfo;
    if(!id){
        await CustomError.createError(ErrorMessages.MISSING_DATA , "Courses issue.");
    }
    return await coursesDao.modify(id, data);
};

export const deleteOne = async (id) => {
    return await coursesDao.delete(id);
};
