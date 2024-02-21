import { 
    signup as signupService, 
    login as loginService
} from "../services/auth.service.js";

export const login = async(req, res, next) => {
    try {
        const { token, user } = await loginService(req.body);
        res.cookie("token", token, {httpOnly: true});

        res.status(200).json({user});
    } catch (error) {
        next(error);
    };
};

export const signup = async (req, res, next) => {
    try {
        const { token, user } = await signupService(req.body);
        res.cookie("token", token, {httpOnly: true});

        res.status(200).json({user});
    } catch (error) {
        next(error);
    };
};

export const logout = async (req,res) => {
    res.clearCookie("token");
    res.status(200).json({message: "Successfully logged out"});
}