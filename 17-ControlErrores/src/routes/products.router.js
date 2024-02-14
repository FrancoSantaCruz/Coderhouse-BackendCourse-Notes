import { Router } from "express";
import { errorTest } from "../controllers/products.controller.js";

const router = Router();

router.get('/test/:num', errorTest);

export default router; 