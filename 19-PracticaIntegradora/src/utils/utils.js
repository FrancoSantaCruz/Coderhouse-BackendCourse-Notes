import bcrypt from "bcrypt";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// export const __dirname = dirname(fileURLToPath(import.meta.url));


const salt = await bcrypt.genSalt(10);
export const hashData = async(data) => {
    return await bcrypt.hash(data, salt);
};

export const compareData = async(data, hashedData) => {
    return await bcrypt.compare(data, hashedData);
};