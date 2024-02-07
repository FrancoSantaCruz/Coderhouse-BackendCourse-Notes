import { Router } from "express";
import { userController } from "../controllers/users.controller.js";

const router = Router();

router.get('/', userController.findAllUser);
router.get('/:uid', userController.findUserById);
router.post('/new', userController.createUser);


export default router;