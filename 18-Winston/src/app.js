import express from "express";
import { logger } from "./winston.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/winston", (req, res) => {
    // console.log("Probando logs");
    /*
    logger.error("Error");
    logger.warn("Warn");
    logger.info("Info");
    logger.http("HTTP");
    logger.verbose("Verbose");
    logger.debug("Debug");
    logger.silly("Silly");
    */
   /*
    logger.danger("danger")
    logger.warning("warning")
    logger.information("information")
    */
    res.send("Probando winston");
})

app.get('/easy', (req, res) => {
    let sum = 0;
    for(let i=0 ; i< 1000000 ; i++){
        sum+=i
    };
    res.send({"easy sum": sum});
});
app.get('/complex', (req, res) => {
    let sum = 0;
    for(let i=0 ; i < 5e8 ; i++){
        sum+=i
    };
    res.send({"complex sum": sum});
});


app.listen(8080, () => {
    logger.information(`Listening on port 8080.\nhttp://localhost:8080/`);
})