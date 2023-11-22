import {dirname} from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt'

export const __dirname = dirname(fileURLToPath(import.meta.url));


// BCRYPT

// Para hashear la informacion
export const hashData = async (data) => {
    return bcrypt.hash(data, bcrypt.genSalt(10));
};

// Compare info hasheada
export const compareData = async (data, hashedData) => {
    return bcrypt.compare(data, hashedData);
};


