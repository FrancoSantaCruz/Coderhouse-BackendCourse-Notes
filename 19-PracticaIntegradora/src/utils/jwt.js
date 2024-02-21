import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateToken = (user) => {
    return jwt.sign(user, config.jwt_secret_key, { expiresIn: 300 });
};

