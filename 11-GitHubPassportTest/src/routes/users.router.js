import { Router } from "express";
import { usersManager } from "../managers/usersManager";
import { hashData, compareData } from "../../utils";
import passport from "passport";

const router = Router()

router.get('/:uid', async(req, res) => {
    const { uid } = req.params;
    try {
        const user = await usersManager.getById(uid)
        res.status(200).json( { message: "User found", user})
    } catch (error) {
        res.status(500).json({error})
    }
})

/* SIGNUP
router.post('/', async(req, res) => {
    const { password } = req.body
    try {
        const hashedPassword = await hashData(password)
        const userCreated = await usersManager.createOne({
            ...req.body,
            password: hashedPassword
        })
        res.status(200).json( { message: "User created", obj})
    } catch (error) {
        res.status(500).json({error})
    }
})
*/

/* LOGIN
router.post('/login', async(req,res) => {
    const { email, password } = req.body;
    try {
        // Verificamos que el email se encuentre en la DB.
        const user = await usersManager.getByEmail(email)
        if(!user){
            return res.status(401).json({message:'Invalid credentials'});
        }

        // Verificamos que la contraseña ingresada sea la misma que la contraseña
        // hasheada que está en DB.
        const isValid = await compareData(password, user.password)
        if(!isValid){
            return res.status(401).json({message: "Invalid credentials"});
        }

        // Si pasa todos los filtros, se le otorga un mensaje de Bienvenida.
        res.status(200).json({message: `Welcome ${user.first_name}`})
    } catch (error) {
        res.status(500).json({error})
    }
})
*/

router.post('/signup', passport.authenticate('signup', { successRedirect: '/home', failureRedirect: '/error'}))

router.post('/login', passport.authenticate('login', { successRedirect: '/home', failureRedirect: '/error'}))


export default router