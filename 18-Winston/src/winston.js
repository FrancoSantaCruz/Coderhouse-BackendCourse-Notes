import winston from "winston";
import config from "./config.js";

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `¬ ${timestamp} ~${level} >  ${message} `;
})

const customLevel = {
    levels: {
        danger: 0,
        warning: 1,
        information: 2,
    },
    colors: {
        danger: 'red',
        warning: 'yellow',
        information: 'blue',
    }
}

// logger con customFormat
/*export const logger = winston.createLogger({
    transports: [
        // Este transporte es para consola
        new winston.transports.Console({
            level: "silly",
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                customFormat,
                // winston.format.simple(),
            ),
        }),
        new winston.transports.File({
            filename: "./logs-file.log",
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.prettyPrint(),
            )
        })
    ]
});*/


// logger con customFormat, customLevel y customColors
/*export const logger = winston.createLogger({
    levels: customLevel.levels,
    transports: [
        // Este transporte es para consola
        new winston.transports.Console({
            level: "information",
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevel.colors }),
                winston.format.timestamp(),
                customFormat,
                // winston.format.simple(),
            ),
        }),
        new winston.transports.File({
            filename: "./logs-file.log",
            level: "warning",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.prettyPrint(),
            )
        })
    ]
});
*/

// logger según el entorno (creación de logger automático).
export let logger;

if(config.environment === "production"){
    logger = winston.createLogger({
        levels: customLevel.levels,
        transports: [
            new winston.transports.File({
                filename: './prodLogs.log',
                level: 'warning',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint(),
                ) 
            }),
        ]
    })
} else {
    logger = winston.createLogger({
        levels: customLevel.levels,
        transports: [
            new winston.transports.Console({
                level: 'information',
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevel.colors }),
                    winston.format.timestamp(),
                    customFormat,
                ),
            }),
        ]
    })
}