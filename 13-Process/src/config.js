import dotenv from 'dotenv'
import program from './commander.js'


/*
 *  En caso de tener más de un .env hay que hacer esta elección del path para 
 *  que sepa con cual entorno trabajar, pero si tenemos un solo entorno,
 *  es innecesario hacerlo. 
 */
const mode = program.opts().mode;
dotenv.config({
    path: 
        mode === 'dev'
            ? '.env.development' 
            : mode === 'test'
            ? '.env.testing'
            : '.env.production',
});

const obj = {
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    github_client_id: process.env.GITHUB_CLIENT_ID
}

export default obj;