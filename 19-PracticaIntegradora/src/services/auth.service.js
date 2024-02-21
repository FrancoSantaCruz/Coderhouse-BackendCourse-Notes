import { usersDao } from "../DAOs/users.dao.js";
import { hashData, compareData, generateToken, transporter } from "../utils/index.js";
import { CustomError, ErrorMessages } from "../utils/error.custom.js";
import config from "../config/config.js";


export const login = async(userInfo) => {
    const {email, password} = userInfo;
    const user = await usersDao.getByEmail(email);
    if(!user){
        await CustomError.createError(ErrorMessages.USER_NOT_FOUND, ErrorMessages.ISSUE_SESSION);
    };
    const isPassValid = await compareData(password, user.password);
    if(!isPassValid){
        await CustomError.createError(ErrorMessages.USER_NOT_FOUND, ErrorMessages.ISSUE_SESSION);
    };

    const token = generateToken( {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
    });
    return { token, user }
};

export const signup = async(userInfo) => {
    const { email, password } = userInfo;

    const user = await usersDao.getByEmail(email);
    if(user){
        await CustomError.createError(ErrorMessages.USER_EXISTS, ErrorMessages.ISSUE_SESSION);
    }

    const hashedPassword = await hashData(password);
    const newUser = await usersDao.create({...userInfo, password: hashedPassword});

    const token = generateToken({
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
    });

    transporter.sendMail({
        from: config.gmail_user,
        to: newUser.email,
        subject: "Welcome to our platform!",
        html: `<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3><hr><p>Corporis illum aliquid, placeat voluptatum eius quisquam atque aliquam reiciendis officiis iure nihil saepe quam maiores praesentium assumenda, aut quaerat eaque exercitationem.</p><p>${token}</p>`,
    });

    return { token, user: newUser };
}