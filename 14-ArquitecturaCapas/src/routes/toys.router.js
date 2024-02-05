import { Router } from "express";
import { findToys, findToyById, createToy } from "../controllers/toys.controller.js";

const router = Router()

router.get('/', findToys);

router.get('/:tid', findToyById);

router.post('/new', createToy);

export default router;