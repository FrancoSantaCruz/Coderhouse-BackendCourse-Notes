import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    if(req.user){
        const ctx = {
            first_name : req.user.first_name,
            last_name : req.user.last_name,
            email : req.user.email,
        }
        return res.render('home', ctx);
    }
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/error', (req, res) => {
    res.render('error')
}) 

export default router