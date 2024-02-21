export default class BasicDao{
    constructor(model, populateOptions){
        this.model = model;
        this.populateOptions = populateOptions;
    };

    async getAll(){
        return await this.model.find().populate(this.populateOptions);
    };

    async getById(id){
        return await this.model.findById(id).populate(this.populateOptions);
    };

    async create(data){
        return await this.model.create(data);
    };

    async modify(id, data){
        return await this.model.findByIdAndUpdate(id, data);
    };

    async delete(id){
        return await this.model.findByIdAndDelete(id);
    };
};