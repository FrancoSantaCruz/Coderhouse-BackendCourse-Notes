/*
Operaciones Sincronicas o bloqueantes:
Cuando buscamos que las tareas se ejecuten de manera secuencial sin importar
el tiempo que tarde en ejecutarse cada una.

Operaciones Asincrónicas o no bloqueantes:
Cuando necesitamos que haya multiples tareas ejecutándose sin esperar
a las que ya se están ejecutando. 
Se ocupan cuando necesitamos alguna operación sin afectar al flujo principal.
ej. setTimeout
setTimeout(() => {
    console.log("Primer mensaje")
}, 2000);
console.log("Segundo mensaje");

ej. setInterval
setInterval(() => {
    console.log("Mensaje dentro de la función")
}, 1000);
console.log("Mensaje fuera.");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

fs en Nodejs -> FileSystem modulo Nativo.

*********************
Funciones SINCRONICAS
*********************

const fs = require('fs')

-Crear un archivo: (path, contenido)
fs.writeFileSync('arch.txt', 'primer archivo creado')

-Leer un archivo: (path, encoding)
const info = fs.readFileSync('arch.txt', 'utf-8');
console.log(info)

-Eliminar un archivo: (path)
fs.unlinkSync('arch.txt')

-Validar si existe un archivo: (path)
const archiveExists = fs.existsSync('arch.txt')
console.log(archivExists)

-Añadir informacion al archivo (no es lo que ocuparemos pero existe)
fs.appendFileSync('arch.txt', 'segundo parrafo')

**********************
Funciones ASINCRONICAS
**********************
******usando Callbacks

-Crear un archivo: (path, contenido, callback(error))
fs.writeFile('arch.txt', 'primer archivo creado', (error) => {
    if(error){
        console.log(error)
    } else {
        console.log('El archivo fue creado con éxito.')
    }
})

-Leer un archivo: (path, encoding, callback(error, data))
const info = fs.readFile('arch.txt', 'utf-8', (error, info) => {
    if(error){
        console.log(error)
    } else {
        console.log(info)
    }
});

-Eliminar un archivo: (path, callback)
fs.unlink('arch.txt', (error) => {
    if(error){
        console.log(error)
    } else {
        console.log("Archivo eliminado con éxito.")
    }
})


******usando Promises

-Crear un archivo 
fs.promises.writeFile('arch.txt', 'primer oracion')
.then( () => {
    console.log("Archivo creado con éxito.")
})
.catch( (error) => {
    console.log(error)
})

-Leer un archivo
fs.promises.readFile('arch.txt', 'utf-8')
.then( (info) => {
    console.log(info)
})
.catch( (error) => {
    console.log(error)
})

-Eliminar un archivo
fs.promises.unlink('arch.txt')
.then( () => {
    console.log("Archivo eliminado con éxito.")
})
.catch( (error) => {
    console.log(error)
})

******archivos JSON
const prods = [
    {
        name: "TV",
        price: "1000",
        stock: 20
    },
    {
        name: "PS5",
        price: "800",
        stock: 10
    },
    {
        name: "iPhone",
        price: "900",
        stock: 5
    },
    {
        name: "Notebook",
        price: "1200",
        stock: 30
    },
]


-JSON.stringify(data) convierte objetos y tipos de datos no strings en texto plano para poder insertarlo en un archivo JSON. 
fs.promises.writeFile('arch.json', JSON.stringify(prods))
.then( () => console.log("El archivo fue creado con éxito."))
.catch( (error) => console.log(error))

-JSON.parse(textPlano) es el opuesto a stringify. Convierte el texto plano de un archivo .json a un objeto manipulable por el código. 
fs.promises.readFile('arch.json', 'utf-8')
.then(info => console.log(JSON.parse(info)))
.catch(error => console.log(error))



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
**********************************
Hands On Lab - Manager de Usuarios
**********************************
const fs = require('fs')

class UserManager {

    constructor(path) {
        this.path = path
    }

    async getUsers() {
        try {
            if (fs.existsSync(this.path)) {
                const info = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(info)
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async createUser(user) {
        try {
            let userList = await this.getUsers();
            let id = userList.length ? userList[userList.length-1].id +1 : 1
            userList.push({id,...user});
            await fs.promises.writeFile(this.path, JSON.stringify(userList));
        } catch (error) {
            return error
        }
    }

    async getUserById(userId) {
        try {
            const userList = await this.getUsers();
            const user = userList.find( user => user.id === userId)
            return (user ? user : 'No existe')
        } catch (error) {
            return error
        }
    }

    async deleteUser(userId) {
        try {
            const userList = await this.getUsers();
            const newUserList = userList.filter( u => u.id !== userId)
            await fs.promises.writeFile(this.path, JSON.stringify(newUserList))
        } catch (error) {
            return error
        }
    }
}


async function test(user1) {
    const manager1 = new UserManager('Users.json')
    await manager1.createUser(user1)
    const user = await manager1.getUserById(2)
    console.log(user)
    await manager1.deleteUser(2)
    const users = await manager1.getUsers()
    console.log(users)
}
const franco = {
    nombre: 'Martin', 
    apellido: 'Santa Cruz',
    edad: 24,
    curso: 'Javascript'
}
test(franco)



***********************
Actividad en Clase Node
***********************

function actClase(){
    let result = {}
    for(let i=0 ; i<10000 ; i++){
        let aux = Math.floor(Math.random() * (21 - 1) + 1)
        if(result.hasOwnProperty(aux)){
            result[aux] = result[aux]+1
        } else {
            result[aux] = 1; 
        }
    }
    return result
}
console.log(actClase())
*/




// 2:11:13