import { businessModel } from "../models/business.model.js";
import { BasicMongo } from "./basic.mongo.js";

class BusinessMongo extends BasicMongo {
    constructor() {
        super(businessModel);
    }
    async addProd(id, obj){
        const business = await businessModel.findById(id);
        business.products.push(obj);
        await business.save();
    }
}

export const businessMongo = new BusinessMongo();