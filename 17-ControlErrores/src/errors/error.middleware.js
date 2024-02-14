export const errorMiddleware = (error, req, res, next) => {
    // console.log("Hola");
    // next()
    res.send({status: "Error", message: error.message, name: error.name });
    // res.send({status: "Error", message: error.message});
}