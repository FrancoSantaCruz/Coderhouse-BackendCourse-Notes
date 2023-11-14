import { Router } from 'express';

const router = Router();

// SESSION EXAMPLE
router.post('/', (req,res) => {
    const { password, email } = req.body;
    req.session["email"] = email
    res.send("User logged.")
});

/* COOKIE EXAMPLE
router.post('/', (req,res) => {
    const { name, email } = req.body;
    res.cookie(name, email, {maxAge:10000}).send('cookie added');
});
*/
export default router;

