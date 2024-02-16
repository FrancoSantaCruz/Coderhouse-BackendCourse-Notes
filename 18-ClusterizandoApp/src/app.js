import express from "express";
import { logger } from "./winston.js";
import cluster from "cluster";
import { cpus } from "os";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const numProcesadores = cpus().length;
// console.log(numProcesadores);

// Me devolverá true o false si es el principal o no. 
// logger.information(cluster.isPrimary);

if (cluster.isPrimary) {
    logger.information(`Este es el proceso principal ${process.pid}`);
    for (let i = 0; i < numProcesadores; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) => {
        logger.danger(`Proceso ${worker.process.pid} ha terminado.`);
        cluster.fork();
    })
} else {
    app.get('/complex', (req, res) => {
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i
        };
        res.send({ "complex sum": sum });
    });
    app.listen(8080, () => {
        logger.information(`[PID:${process.pid}] Listening on port 8080 | http://localhost:8080/`);
    })
}


// app.get("/winston", (req, res) => {
//     // console.log("Probando logs");
//     /*
//     logger.error("Error");
//     logger.warn("Warn");
//     logger.info("Info");
//     logger.http("HTTP");
//     logger.verbose("Verbose");
//     logger.debug("Debug");
//     logger.silly("Silly");
//     */
//     /*
//      logger.danger("danger")
//      logger.warning("warning")
//      logger.information("information")
//      */
//     res.send("Probando winston");
// })
// app.get('/easy', (req, res) => {
//     let sum = 0;
//     for (let i = 0; i < 1000000; i++) {
//         sum += i
//     };
//     res.send({ "easy sum": sum });
// });
