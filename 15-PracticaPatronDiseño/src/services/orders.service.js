import { ordersMongo } from "../DAOs/orders.mongo.js";

class OrdersService {
    async findAll(){
        const orders = await ordersMongo.getAll();
        return orders;
    };
    async findById(id){
        const order = await ordersMongo.getById(id);
        return order;
    };
    async createOne(obj){
        const newOrder = await ordersMongo.createOne(obj);
        return newOrder;
    };
    async updateOne(obj){
        const { id, ...orderInfo} = obj;
        const response = await ordersMongo.updateOne(id, orderInfo);
        return response;
    };
    async deleteOne(id){
        const removedOrder = await ordersMongo.deleteOne(id);
        return removedOrder;
    };
};

export const ordersService = new OrdersService();