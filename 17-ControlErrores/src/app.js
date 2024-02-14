import express from "express";
import productsRouter from "./routes/products.router.js";
import { errorMiddleware } from "./errors/error.middleware.js";

import NotFoundError from "./errors/not-found.error.js";
// import CustomError from "./errors/not-found.error.js";
import { ErrorMessages } from "./errors/error.enum.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log(`Listening un port 8080\nhttp://localhost:8080/`);
})

/*
app.get('/users', (req, res) => {
    // throw new Error("User not found");
    // NotFoundError.createError("User");
    // CustomError.createError(ErrorMessages.USER_NOT_FOUND);
    throw new NotFoundError("User");
});
app.get('/products', (req, res) => {
    // throw new Error("No products found.");
    // NotFoundError.createError("Product");
    // CustomError.createError(ErrorMessages.PRODUCT_NOT_FOUND);
    throw new NotFoundError("Product");
});
*/

app.use('/', productsRouter);

// Middleware global
app.use(errorMiddleware);