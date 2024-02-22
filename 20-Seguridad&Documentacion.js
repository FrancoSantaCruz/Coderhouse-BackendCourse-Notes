`                               OWASP                                   `/*
Documentacion: https://owasp.org/

Open Web Application Security Project, un proyecto de código abierto
internacional, sin fines de lucro, el cual brinda información referente
a la seguridad general de aplicaciones web.

Además, OWASP provee un conjunto de herramientas que permiten conocer a
profundidad muchos conceptos y herramientas referentes a la seguridad de 
aplicaciones web.

Owasp es muy amplio, y es mantenido por muchos elementos internacionales
lo cual nos permite acceder a herramientas como:
    - Owasp ZAP: Proxy para poder hacer testing de peticiones entre el 
    navegador y aplicaciones que queremos probar.
    - Owasp Juice Shop: Aplicativo de prueba con vulnerabilidades, donde
    existen retos de búsqueda y explotación para detectar algunas de las 
    vulnerabilidades de un proyecto "real".
    - Owasp Testing Guide: Guía sobre "cómo testear tu aplicación web"
    para poder hacer un checklist de nuestra aplicación web, para verificar
    vulnerabilidad por vulnerabilidad, si nuestra aplicación cuenta 
    con ésta y podría significar algún futuro problema. 

Top 10 Web Application Security Risks:
https://owasp.org/www-project-top-ten/

*/
`                                 SWAGGER                               `/*

Swagger es una herramienta de documentación de código, la cual nos 
permitirá mantener cada módulo de nuestra API dentro de un espectro de 
entendimiento sólido, es decir, todo se mantendrá en un contexto 
suficientemente alimentado de información, para poder ser entendido por 
futuros desarrolladores (O para una versión tuya del futuro), cuando tenga
que revisar el código más adelante.

Con esta herramienta podremos hacer nuestra propia Open API specification.
También conocida como Swagger specification, es un formato de descripción 
de REST APIs.
Estas especificaciones pueden ser escritas en yaml o en json, y permitirán
profundizar sobre un módulo, ruta o esquema específico de nuestra API.

Por ejemplo, si queremos realizar la documentación de un módulo de 
usuarios ¿Qué habría que documentar?
Al desglosar el módulo, podríamos separarlo en la siguiente fórmula:

    - Un esquema que represente al usuario. 
    - Un conjunto de rutas referentes a los usuarios.
        - Posibles queries para cada ruta 
        - Parámetros para las rutas que sean necesarias.
        - Consideraciones especiales de cada endpoint
    - Un conjunto de posibles Inputs para operaciones con el usuario.

Para utilizar swagger debemos instalarlo: 
    npm i swagger-ui-express
    npm i swagger-jsdoc

Creamos las opciones principales de Swagger.
Desglosemos de qué se trata cada propiedad:

    - openapi: Sirve para especificar las reglas específicas que seguirá 
    la openapi generada.

    - title: Titulo de la API que estamos documentando.

    - description: Descripción de la API que estamos documentando.

    - apis: Aquí especificamos la ruta a los archivos que contendrán la 
    documentación. La sintaxis utilizada indica que utilizaremos una 
    carpeta docs, la cual contendrá subcarpetas con cada módulo a 
    documentar.

*/

