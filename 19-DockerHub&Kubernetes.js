`                             DOCKER HUB                                `/*

Dockerhub es una librería, o repositorio de imágenes en la nube.
Cuando hemos finalizado con el mantenimiento de nuestro aplicativo, 
necesitamos compartir la imagen resultante con nuestro equipo.
Al subir nuestra imagen en la nube, todos los miembros autorizados podrán
descargarla y utilizarla. 

¿Por qué debería tener mis imágenes en la nube? 
Existen múltiples razones para tener nuestra imagen en un repositorio: 
    - Podemos compartir nuestra imagen con nuestro equipo de desarrollo.
    - Tenemos un sistema mejor controlado de nuestra imagen, ya que cada
    cambio de ésta puede significar una nueva tag con otra versión.
    - Permite que otros softwares descarguen la imagen. 
La razón de que éste se encunetre en la nube y permita que otros softwares
lo descarguen, significa que al momento de configurar procesos más 
complejos (como deployment), podemos obtener la imagen directamente, sin 
necesidad de tener que estar cambiando el archivo local. 

Repositorio ejemplo de coder para subir un proyecto a DockerHub.
https://github.com/CoderContenidos/RecursosBackend-Docker/tree/main

**IMPORTANTE
    En el package.json es obligatorio que el script de ejecución sea con
node porque Dockerhub al momento de ejecutar la imagen solo trabaja con
node y no con nodemon. 

    Debemos agregar al Dockerfile como variable de entorno la MONGO URI
por ej: ENV MONGO_URL=<mongouri>

Para logearse en docker desde nuestra terminal debemos ejecutar: 
    > docker login

Existe una nomenclatura para nombrar a las imágenes a dockerhub, 
para ello cambiaremos el nombre de la imagen creada anteriormente con el
siguiente comando:
    > docker tag [nombre anterior] [nuevo tag]
    La convención utilizada por los nombres de imagenes que se espera 
    respetar es la siguiente: 
    nombreDeUsuario/nombreRepositorio:version
ej: francosantacruz/chrepo:1.0.0

Y ahora para subir modificaciones a la imagen debemos utilizar:
    > docker push [nombreImagen]
ej: docker push francosantacruz/chdockertest:1.0.0

Y aparecerá en dockerhub en el apartado de repositorios nuestra imagen ahí.
Lo que permite que cualquier usuario de docker pueda clonar nuestra imagen
y aportar al repo. 

docker desktop = github client desktop
docker hub = git hub
Extensión de docker = Permite crear archivos docker con más facilidad. 



*/
`                             KUBERNETES                                `/*

Ver clase 19: [00:53:10] -> [01:27:35]

*/


