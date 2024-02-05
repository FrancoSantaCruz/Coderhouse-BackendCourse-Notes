import { Router } from "express";
import { findUsers, findUserById, createUser } from "../controllers/users.controller.js";

const router = Router()

router.get('/', findUsers);

router.get('/:uid', findUserById);

router.post('/new', createUser);



export default router;