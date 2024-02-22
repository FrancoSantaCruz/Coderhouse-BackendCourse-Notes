import bcrypt from 'bcrypt';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const __dirname = join(dirname(fileURLToPath(import.meta.url)), "..");

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);
