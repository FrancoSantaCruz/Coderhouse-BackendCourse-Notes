import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";
// import { hashData, compareData } from "../utils.js";
import passport from "passport";

// import { jwtValidation } from "../middlewares/jwt.middleware.js";
// import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// router.get('/:uid', jwtValidation, authMiddleware("admin"), async (req, res) => {
//     const { uid } = req.params;
//     try {
//         const user = await usersManager.getById(uid);
//         res.status(200).json({ message: 'User Found', user })
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });


router.get('/:uid', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { uid } = req.params;
    console.log("---req.user---");
    console.log(req.user);
    try {
        const user = await usersManager.getById(uid);
        res.status(200).json({ message: 'User Found', user })
    } catch (error) {
        res.status(500).json({ error });
    }
});


export default router;