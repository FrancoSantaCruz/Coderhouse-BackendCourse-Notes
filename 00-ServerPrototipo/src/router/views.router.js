import { Router } from "express";
import { productsManager } from "../ProductManager.js";
const router = Router();

router.get('/add-product', (req,res) => {
    res.render('addProducts')
})

router.get('/products', async (req,res) => {
    let products = await productsManager.getProducts({})
    res.render('products', {products, style:"products.css"})
})

router.get('/products/:pid', async (req,res) => {
    const {pid} = req.params;
    let prod = await productsManager.getProductById(+pid)
    res.render('product', {prod, style:"product.css"})
})    


export default router;