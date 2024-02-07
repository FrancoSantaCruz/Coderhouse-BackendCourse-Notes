import { usersService } from "../services/users.service.js";

class UsersController {
    findAllUser = async(req, res) => {
        try {
            const result = await usersService.findAll();
            res.status(200).json( {users: result} );
        } catch (error) {
            res.status(500).json( {message: error.message });
        };
    };

    findUserById = async(req, res) => {
        const { uid } = req.params;
        try {
            const result = await usersService.findById(uid)
            res.status(200).json( { user: result })
        } catch (error) {
            res.status(500).json( {message: error.message });
        };
    };

    createUser = async(req, res) => {
        try {
            const createdUser = await usersService.createOne(req.body);
            res.status(200).json( {message: 'User created.', user: createdUser} );
        } catch (error) {
            res.status(500).json( {message: error.message });
        };
    };
};

export const userController = new UsersController();