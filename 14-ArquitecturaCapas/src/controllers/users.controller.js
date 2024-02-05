import { findAll, findById, createOne } from '../services/users.service.js';

export const findUsers = (req, res) => {
    const users = findAll();
    res.status(200).json({message: 'Users found.', users});
};

export const findUserById = (req, res) => {
    const { uid } = req.params;

    const user = findById(+uid);
    if(!user){
        return res.status(404).json({message: 'User not found.'});
    };

    res.status(200).json({message: 'User found.', user});
};

export const createUser = (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if(!first_name || !last_name || !email || !password) {
         res.status(404).json({message: 'Some data is missing.'});
    };

    const userCreated = createOne(req.body);
    res.status(200).json({message: 'User created.', user: userCreated});
};