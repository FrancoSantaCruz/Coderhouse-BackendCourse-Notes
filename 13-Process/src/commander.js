import { program } from "commander";
import conf from './config.js'
program
    .option('-m, --mode <mode>', 'Ambiente a ejecutar', 'dev')
    .option('-p, --port <port>', 'puerto', '8080')
    .option('-d, --debug', 'variable para modo debug', false)
    .parse()

// node src/commander.js -m test --port 3000 1 4 2 fasd

// Me devuelve en formato clave:valor las options que configuramos anteriormente
// Y solamente esas opciones.
// console.log('options', program.opts());

// En caso de haber pasado más argumentos que no estan en las opciones
// dichos argumentos son guardados en:
// console.log('otros argumentos: ', program.args)

// console.log("CONF:",conf.port)

export default program;