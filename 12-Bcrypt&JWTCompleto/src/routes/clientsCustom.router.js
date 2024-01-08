import CustomRouter from './custom.router.js';
import { clientsManager } from "../managers/clientsManager.js";


class ClientRouter extends CustomRouter {
    init() {
        this.get(
            '/:username',
            async (req, res) => {
                const { username } = req.params
                try {
                    const client = await clientsManager.getByUsername(username)
                    if (!client) {
                        return res.errorResponse(' Client not found boludin ')
                    }
                    res.successResponse('Client found.', client)
                } catch (error) {
                    res.serverError(error)
                }
            }
        )
    }
}

// router.post('/', async(req, res) => {
//     const createdClient = await clientsManager.createOne(req.body);
//     res.json({client: createdClient})
// })

// router.param('username', (req, res, next, username) => {
//     const regex = /^[a-zA-Z]+$/;
//     if (!regex.test(username)) {
//         return res.status(400).json({message: 'Invalid username format'});
//     }
//     next();
// });


export const clientsCustomRouter = new ClientRouter(); 