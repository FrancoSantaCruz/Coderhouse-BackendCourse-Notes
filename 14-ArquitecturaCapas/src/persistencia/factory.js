import ToysFile from "./DAOs/fileDAO/toys.manager.js";
import ToysMem from "./DAOs/memDAO/toys.manager.js";

let toysManager;

const persistencia = process.argv[2];

switch(persistencia){
    case "MEM":
        console.log("MEM DAO");
        toysManager = new ToysMem();
        break;
    case "FILE":
        console.log("FILE DAO");
        toysManager = new ToysFile();
        break;
    default: 
        // MongoDAO
        break;
}

export default toysManager;