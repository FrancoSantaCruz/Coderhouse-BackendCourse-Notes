/*
export default class NotFoundError{
    static createError(entity) {
        throw new Error(`${entity} not found.`);
    };
};
*/

/*
export default class NotFoundError{
    static createError(entity) {
        const error = new Error(`${entity} not found.`);
        error.name = "NotFoundError";
        throw error;
    };
};
*/ 

/*
export default class CustomError{
    static createError(message) {
        throw new Error(`${message}`);
    };
};
*/

// export default class NotFoundError extends Error {
//     constructor(entity){
//         super(`${entity} not found.`);
//     }
// }

export default class CustomError{
    static createError(message, name="Error") {
        const error = new Error(`${message}.`);
        error.name = name;
        throw error;
    };
};