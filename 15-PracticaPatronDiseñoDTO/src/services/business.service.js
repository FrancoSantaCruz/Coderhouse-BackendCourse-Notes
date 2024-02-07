import { businessMongo } from "../DAOs/business.mongo.js";

class BusinessService {
    async findAll(){
        const business = await businessMongo.getAll();
        return business;
    };
    async findById(id){
        const business = await businessMongo.getById(id);
        return business;
    };
    async createOne(obj){
        const newBusiness = await businessMongo.createOne(obj);
        return newBusiness;
    };
    async updateOne(obj){
        const { id, ...businessInfo} = obj;
        const response = await businessMongo.updateOne(id, businessInfo);
        return response;
    };
    async deleteOne(id){
        const removedBusiness = await businessMongo.deleteOne(id);
        return removedBusiness;
    };
    async addProd(obj){
        const { id, ...info } = obj;
        const response = await businessMongo.addProd(id, info);
        return response;
    };
};

export const businessService = new BusinessService();