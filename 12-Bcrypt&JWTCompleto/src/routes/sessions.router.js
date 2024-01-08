import { Router } from "express";
import passport from "passport";
import { usersManager } from '../managers/usersManager.js'

import { generateToken, hashData, compareData } from '../utils.js'

const router = Router();

// BCRYPT ROUTES
router.post('/', async(req, res) => {
    const { password } = req.body;
    try {
        const hashedPassword = await hashData(password)
        const createdUser = await usersManager.createOne({...req.body, password: hashedPassword});
        res.status(200).json({message: 'User created.', user: createdUser});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const userDB = await usersManager.getByEmail(email);
        if(!userDB){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const isValid = await compareData(password, userDB.password);
        if(!isValid){
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const token = generateToken({ email, first_name : userDB.first_name, role: userDB.role })
        res.status(200).cookie('token', token, { httpOnly: true }).json({message: `Welcome ${userDB.first_name}`, token})
    } catch (error) {
        res.status(500).json({error});
    }
})


// PASSPORT (Signup & Login)
// router.post('/signup', passport.authenticate('signup',
//     {
//         successRedirect: '/',
//         failureRedirect: '/error'
//     }
// ))

// router.post('/login', passport.authenticate('login',
//     {
//         successRedirect: '/',
//         failureRedirect: '/error'
//     }
// ))

// router.get('/logout', (req, res) => {
//     req.session.destroy( () => {
//         res.redirect('/')
//     })
// })

// GITHUB

router.get('/auth/github/',
  passport.authenticate('github', { scope: [ 'user:email' ] })
);

router.get('/github', 
  passport.authenticate('github', { failureRedirect: '/error', successRedirect: '/' })
);






export default router;