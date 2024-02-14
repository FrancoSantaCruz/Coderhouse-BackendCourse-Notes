import { ErrorMessages } from "../errors/error.enum.js";
import CustomError from "../errors/not-found.error.js";

export const errorTest = (req, res) => {
    const { num } = req.params;
    if( num == "1" ){
        CustomError.createError(ErrorMessages.PRODUCT_NOT_FOUND, "Product issue.");
    } else {
        res.send({ message: "Hi"});
    }    
}