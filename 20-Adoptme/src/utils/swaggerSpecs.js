import swaggerJSDOC from "swagger-jsdoc";
import { __dirname } from "./index.js";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Coderhouse - Backend Course",
            version: "1.0.1",
            description: `
            **¡Bienvenido a la documentación de APIs para mi proyecto de eCommerce basado en Express y Node.js!**
            
            Este proyecto es un sistema de comercio electrónico (eCommerce) que utiliza tecnologías de Express y Node.js para proporcionar una plataforma robusta y escalable para la compra y venta de productos en línea. 
            
            Este proyecto se ha desarrollado como parte de la **entrega final** del curso de **backend** de la carrera de "Desarrollador Full Stack" en [Coderhouse](https://www.coderhouse.com/). Durante el curso, hemos aplicado conceptos y técnicas fundamentales de desarrollo backend para construir esta aplicación eCommerce desde cero.
            
            _El objetivo de esta documentación es proporcionar una guía completa y detallada sobre las APIs disponibles en mi proyecto. 
            Aquí encontrarás información sobre:_ 
            - _Los endpoints disponibles_
            - _Los parámetros de solicitud y respuesta_
            - _Ejemplos de uso para ayudarte a integrar y utilizar nuestras APIs de manera efectiva en tu aplicación cliente._
            
            Links del proyecto:
            - [Project Repository](https://github.com/FrancoSantaCruz/Coderhouse-BackendCourse-3erPracticaDeIntegracion)
            - [Linkedin](https://www.linkedin.com/in/franco-santa-cruz/)
            - [Github Profile](https://github.com/FrancoSantaCruz)
            - [Email](mailto:sczfranco@gmail.com)
            
            

            .  
            `,
            contact: {
                email: "sczfranco@gmail.com"
            }
        },
    },
    apis: [`${__dirname}/docs/*.yaml`]
}

export const swaggerSetup = swaggerJSDOC(swaggerOptions);