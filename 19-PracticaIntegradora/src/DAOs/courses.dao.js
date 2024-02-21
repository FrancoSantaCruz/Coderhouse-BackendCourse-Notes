import BasicDao from "./basic.dao.js";
import { coursesModel } from "../models/courses.model.js";

class CoursesDao extends BasicDao {
    constructor(){
        super(coursesModel, ["teacher", "students"]);
    };
};

export const coursesDao = new CoursesDao();