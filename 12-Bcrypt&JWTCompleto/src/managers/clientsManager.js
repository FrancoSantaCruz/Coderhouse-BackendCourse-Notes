import { clientsModel } from '../db/models/clients.model.js'

class ClientsManager {
    async getByUsername(username){
        const res = await clientsModel.findOne({username});
        return res;
    }
    async createOne(obj){
        const res = await clientsModel.create(obj);
        return res;
    }
}

export const clientsManager = new ClientsManager();