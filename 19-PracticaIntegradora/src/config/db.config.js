import mongoose from "mongoose";
import config from "./config.js";
import { logger } from "../utils/winston.js";

const URI = config.mongo_uri;

mongoose
    .connect(URI)
    .then((db) => logger.info("Connected to MongoDB succesfully."))
    .catch((error) => logger.critical(error));