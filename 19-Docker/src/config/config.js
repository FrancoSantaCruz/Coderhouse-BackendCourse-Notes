import dotenv from "dotenv"

dotenv.config();

export default {
    mongo:{
        URL: process.env.MONGO_URL || 'http://localhost:27017'
    },
    port: process.env.PORT,

}