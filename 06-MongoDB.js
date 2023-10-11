/*
Bases de datos:
    - Relacionales. (SQL) -> Utilizan SQL como lenguaje principal para desarrollar sus funcionalidades.
    - No relacionales. (noSQL) -> Los que no

Una vez que entendimos que la base de datos nos sirve para mantener 
los datos organizados, toca entender cuándo utilizar un modelo relacional
o un modelo no relacional: 

    - Una base de datos RELACIONAL refiere a estructura, relación
    dependencia y de cambio controlado.

    - Una base de datos NO RELACIONAL refiere a algo menos estructurado
    con relaciones y dependencias más flexibles, y de cambios 
    sumamente rápidos.

Modelos relacional:
    - Refiere a modelos de datos donde se requieren estructuras
    más firmes y estrictas sobre los datos.
    Además, se utilizan en datos más controlados.
    - Se basan en tablas, columnas y filas para gestionar sus datos.
    - Permiten conectar las tablas a partir de "relaciones" basadas 
    en llaves primarias y foráneas. 


Modelos no relacional:
    Se desarrolla un modelo donde los datos sean más flexibles, 
    tanto en estructura, como en asociación.
    Todo esto con el fin de crear datos pensados para desempeño,
    no para consistencia inmediata.

    La flexibilidad de los datos lo hace considerablemente más rápido
    en cuando a su accesibilidad.
    Puede basarse en: 
        a) Clave valor
        b) Documentos
        c) Gráficos
        d) Memoria

    Son bases de datos muy útiles para organizar y gestionar informacion
    no estructurada, o cuando no se tiene una noción clara de los datos
    a almacenar.
    Alto grado de escalabilidad y de performance. 
    No utiliza SQL como lenguaje
    Algunos sistemas No SQL son:
        MongoDB
        Redis
        DynamoDB

     
 ______________________________________________________________________________________________________________
|                                                         |                                                    |
|                    Modelo Relacional                    |               Modelo No Relacional                 |
|_________________________________________________________|____________________________________________________|
|                                                         |                                                    |
|  Cuando el volumen de os datos no crece, o bien lo hace |  Cuando el volumen de los datos crece rapidamente  |
|                       poco a poco                       |                                                    |
|                                                         |                                                    |
|    Cuando las necesidades del proceso pueden atenderse  |  Cuando las necesidades del proceso son tan altas  |
|                   en un solo servidor                   |        y tan constantes, que se requieren          |
|                                                         |               multi-servidores                     |
|                                                         |                                                    |
|     Cuando no existen picos de uso por parte de los     |  Cuando los usuarios saturan el sistema y generan  |
|            usuarios que utilizan el sistema.            |                 "picos de uso"                     |
|_________________________________________________________|____________________________________________________|

MongoDB es: 
    - Una base de datos no relacional orientada a documentos. 
    - En lugar de tablas, opta por utilizar colecciones.
    - Cada documento que ingresamos a una colección puede tener diferente estructura.
    - Puede utilizarse en modo local o en la nube.

    Caracteristicas:
        - Almacena datos en documentos flexibles similares a JSON: la estructura
        de datos se puede cambiar con el tiempo.
        - El modelo de documento se asigna a los objetos en el código de su 
        aplicación para facilitar el trabajo con los datos.
        - Las consultas ad hoc, la idexación y la agregación de tiempo real 
        ofrecen maneras potentes de acceder a los datos y analizarlos.
        - MongoDB es una base de datos distribuida en su núcleo, por lo que la 
        alta disponibilidad, la escalabilidad horizontal y la distribución 
        geográfica están integradas y son fáciles de usar. 
        - MongoDB es de uso gratuito. 

    Documentos:  
        Una de las grandes ventajas de un documento es que éste se basa en el
        concepto de clave-valor.
        No son porpiamente un "objeto" como para llamarlos de tal forma, sino 
        que MongoDB trabaja con una extensión de los archivos conocidos como BSON. 
        Esto es lo que realmente permanece en la base de datos.
        Los esquemas de una base de datos en MongoDB, con ayuda de elementos 
        como mongoose, son fácilmente manipulables, ya que permite definirlos con 
        una estructura casi idéntica a la de un objeto.

    SQL Tabla -> Coleccion MongoDB
    

*/