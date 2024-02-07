import fs from "fs";

const path = "toys.json";

class ToysManager {
    
    async findAll() {
        if(fs.existsSync(path)){
            const toys = await fs.promises.readFile(path, "utf-8");
            return JSON.parse(toys);
        } else {
            return [];
        };
    };

    async findById(id) {
        const toys = await this.findAll();
        const toy = toys.find( (t) => t.id === id );
        return toy;
    };

    async createOne(obj) {
        const toys = await this.findAll();
        const id = toys.length ? toys[toys.length - 1].id + 1 : 1;
        const newObj = { id, ...obj };
        toys.push(newObj);

        await fs.promises.writeFile(path, JSON.stringify(toys));
    };
};

export default ToysManager;