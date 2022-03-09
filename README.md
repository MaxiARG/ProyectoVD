# ProyectoVD
Proyecto Virtual Dreams

Para el ejercicio 5 se usaron las siguientes dependencias:<br>
Express<br>
Ajv<br>
Promise<br>
Request-Promise<br>
Nodemon (solo en modo dev, a modo de hot-reload)<br>

Comandos para iniciar el proyecto:<br>
npm run start<br>

Comando para iniciar el proyecto usando nodemon:<br>
npm run dev<br>

EJERCICIO 4<br>
Para ejecutarlo, escribir en la terminal "node mostrarPersonas.js". Alternativamente llamar http://localhost:3001/ejercicio4
El metodo usado es GET, y lo que se obtiene son los registros almacenados en la base de datos.
Alternativamente, con el servidor en el archivo index.js corriendo, la URL para ejecutar esta misma funcionalidad
es http://localhost:3001/ejercicio4<br><br>

EJERCICIO 5<br>
1- Con el servidor corriendo, la ruta para acceder a esta funcionalidad es http://localhost:3001/api/personas  <br>
2- En Postman ingresar dicha ruta. Seleccionar el metodo POST. En el body seleccionar Raw y escribir el siguiente JSON<br>
{
    "nombre" : "maxi",
    "apellido":"ramos",
    "dni": 40025920
}<br>
3- en Headers, agregar la key Content-Type y en Value application/json<br>
4- Presionar SEND. En la consola del servidor se vera la respuesta con un par Key:Value como el siguiente:<br>
{ name: '-Mxj7CuRlF0-jmdry2vS' }<br><br>

EJERCICIO 6<br>
1- Ingresar la ruta http://localhost:3001/<br>
2- llenar el formulario con informacion valida<br>
3- Presionar enviar. Si los datos fueron correctos, se muestra un JSON con el mensaje exitoso.<br>
4- Si los datos son invalidos segun el requerimiento original, se muestra el log con el error<br>

<br><br><br>
PREGUNTAS TEORICAS<br>

1.	¿Qué es un servidor HTTP? <br>
Un servidor HTTP es una pieza de software, un sistema que entiende URLs y el protocolo HTTP, Hypertext Transfer Protocol. El protocolo HTTP es el que se utiliza en los navegadores web para ver las páginas.
Teniendo mi navegador abierto, ingreso una dirección URL y el navegador envia un request al servidor web. Éste ultimo devuelve un response en forma de HTML o cualquier otro tipo de formato de documento. Finalmente el navegador va a mostrar el response recibido del servidor.<br><br>

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos<br>

También se los llama HTTP request methods, indican la acción que deseamos realizar en el servidor, indican una intencion, por ejemplo si uso el metodo DELETE se entiende que quiere borrar algun objeto del servidor. Entre los métodos más conocidos están POST, GET, PUT, DELETE, PATCH.<br>

GET: se usa para solicitar un determinado recurso y no debería realizar cambios en el servidor. En términos de operaciones CRUD se relaciona a la operación de Lectura. La información viaja en la URL, por lo que se debe tener especial cuidado con la protección de información sensible.<br>

POST: se usa para enviar algún recurso o información y producir algún cambio en el servidor, como agregar algún valor, información o recurso en el servidor. En términos de operaciones CRUD se relaciona a la operación de creación. La información viaja en el body del Request.<br>

PUT: Usado para actualizar o reemplazar algún recurso que ya existe en el servidor. <br>

DELETE: Usado para eliminar algún recurso del servidor.<br><br>

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? <br>

Los request y los response son mensajes del protocolo HTTP que sirven para intercambiar datos entre el cliente y el servidor. Los request son creados por el cliente para ser enviados y atendidos en el servidor. Los response son creados por el servidor para responder a las solicitudes del cliente.<br>
Toda la comunicación entre cliente y servidor se produce mediante el protocolo HTTP. Tanto el request como el response tienen una estructura y un formato especifico.<br>
El Request esta formado por tres componentes principales:<br>
A- Start Line: contiene el método HTTP usado (GET, POST, etc). Además contiene un request target (una URL) y una version de HTTP usada.<br>
B- Header: son los parámetros que se envían en un request o un response que sirven para proporcionar información esencial sobre la comunicación que se esta dando.<br>
Campos que puede contener un Header:<br>
Date: con la hora y fecha de la petición<br>
Content-Type: con el tipo de contenido de la petición, por ejemplo text/html.<br>
User-Agent: que contiene información adicional como el Navegador que se esta ejecutando, el sistema operativo y otros datos.<br>
Accept: que contiene los Content-Types que se aceptan.<br>
Accept-Language: contiene los lenguajes que se aceptan<br>
Host: con la IP de origen.<br><br>

4.	¿Qué es un queryString? (En el contexto de una url)<br>

Una Query String forma parte de una URL, y asigna valores a ciertos parámetros que se deseen enviar al servidor.
Ejemplo ficticio:<br>

https://libros.com/crearLibro?nombreLibro=PilaresDeLaTierra?autor=Follet<br>

Estos parámetros suelen ser tomados del HTML Form de la pagina.<br>
Los parámetros son visibles en la forma del ejemplo, siempre y cuando se utilice el método GET. Si utilizo el método POST, los parámetros viajan dentro del BODY. En el lado del servidor, puedo recuperar esos parametros tomandolos del Request, por ejemplo
let nombreLibro = request.body.nombreLibro.<br>
Estos parametros siempre viajan como Strings.<br><br>

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?<br>

Un Response Code es una respuesta del servidor a un request del cliente. Cuando un cliente envia una petición al servidor, éste le responde con un código de tres dígitos. Sirven para comunicar entre el servidor y el cliente, si los mensajes y la comunicación se están llevando a cabo de manera correcta o si hay errores, problemas o situaciones especiales.<br>
La clasificación de los response code se dividen en 5 grupos:<br>
1XX: Respuesta de información<br>
2XX: Éxito, el request fue tratado por el servidor y el servidor le dio al cliente la respuesta esperada.<br>
3XX: Redireccionamiento. El cliente fue redireccionado.<br>
4XX: Errores de Cliente. Pagina no encontrada o imposible alcanzar la pagina por ejemplo.<br>
5XX: Error del servidor. El servidor no pudo completar el request.<br><br>

Response Code más importantes:<br>
HTTP Status Code 200 – OK: Lo mas normal es que todo salga bien y devuelva este código.<br>
HTTP Status Code 201 - Recurso creado correctamente
HTTP Status Code 202 - se recibio la solicitud y estara en proceso.
HTTP Status Code 204 - solicitud exitosa. Respuesta sin contenido
HTTP Status Code 301 / 302: Redireccionamiento<br>
HTTP Status Code 404: Pagina no encontrada<br>
HTTP Status Code 401: Error que se produce cuando se requiere una autenticación pero se produjo un error o no se entrego dicha autenticación.<br>
HTTP Status Code 403 - Acceso Prohibido. El usuario intenta acceder a un recurso el cual no tiene permiso.
HTTP Status Code 405 - Metodo no permitido
HTTP Status Code 410: La pagina ya no existe y no esta disponible. El link que hace referencia a esta pagina ya no servirá mas.<br>
HTTP Status Code 500- Internal Server Error: Hubo un error en el servidor.<br>
HTTP Status Code 503 – Servicio no disponible. El servidor no es alcanzable y se debería intentar nuevamente mas tarde. Puede suceder como respuesta a una sobrecarga del servidor, o simple mantenimiento.<br><br>

6.	¿Cómo se envía data en un Get y cómo en un POST? <br>
La información se envia a partir de un formulario html que tiene la estructura básica siguiente:<br>
```xml
<form action='accionServidor' method='POST|GET|DELETE|etc'> <br>
[…]<br>
</form><br>
```
Si utilizo un método GET, la información se envía dentro de la URL, visible al usuario.<br>
Si utilizo un método POST, la información se envía dentro del Body del request. No visible al usuario en la URL.<br><br>

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?<br>

El verbo por defecto es GET.<br>

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.<br>

JSON (Javascript Object Notation) es un formato para intercambiar/transmitir datos en forma de texto de un sistema a otro. <br>Sigue un estándar especifico y puede ser empleado por diferentes lenguajes de programación y sistemas.<br>
El elemento básico se compone por un par Clave:Valor.<br>
Llaves { } delimitan objetos y son obligatorias para iniciar y terminar el contenido.<br>
Corchetes [ ] indican un array<br>
Dos puntos: separan una clave de su valor<br>
Coma: indica separación entre elementos. <br>

XML es otro formato usado para intercambiar datos entre aplicaciones. Utiliza una estructura de tags personalizadas para representar objetos y siempre deben tener un tag de cierre. El contenido XML no necesita estar delimitado por comillas, al contrario de JSON. XML no soporta arrays como si lo hace JSON. XML soporta tipos de datos como imágenes, mientras que JSON solo soporta números y textos.<br>

Ejemplo XML:<br>

```xml
<xml versión='1.0' encoding='UTF-8' ¿>
<ciudades>
	<ciudad>
		<nombre>CABA</nombre>
	</ciudad>
	<ciudad>
		<nombre>Posadas</nombre>
	</ciudad>
</ciudades>
```


<br><br>

Ejemplo JSON:<br>

{
  "ciudades": [
    "CABA",
    "Posadas",
    "San Miguel de Tucuman"
  ],
  "precio": 2200,
  "descuento": false
}

<br><br>
9.	Explicar brevemente el estándar SOAP<br>

Significa Simple Object Access Protocol, es un protocolo que sirve para que dos sistemas iguales o completamente diferentes puedan comunicarse mediante el intercambio de datos usando XML, los sistemas pueden estar funcionando en sistemas operativos diferentes, estar hechos en lenguajes diferentes y usar tecnologías diferentes. Funciona con el protocolo HTTP descrito antes y se utiliza en los servicios web para enviar y recibir mensajes entre sistemas.<br>
El documento XML esta compuesto por los siguientes elementos:<br>
A-	Envelope, que identifica el archivo XML como de tipo SOAP<br>
B-	Header, que contiene atributos que especifican cómo el receptor debe procesar el mensaje SOAP.<br>
C-	Body, que contiene información de la llamada y la respuesta<br>
D-	Fault, que contiene errores y códigos de estado.<br>

A muy grandes rasgos, el esqueleto que forma un mensaje SOAP es el siguiente:<br>
```xml
<?xml versión=”1.0”>

<soap:Envelope
Xmlns:soap=http://www.w3.org/2003/05/soap-envelope/
Soap:encodingStyle=http://www.w3.org/2003/05/soap-encoding>

<soap:Header>	</soap:Header>

<soap:Body> 
	
<soap:Fault>
</soap:Fault>

</soap:Body>

</soap:Envelope>
```

10.	Explicar brevemente el estándar REST Full<br>

A grandes razcos, es una aplicacion web en el lado del backend, un servicio web.
En este sentido, en el lado del servidor estan configuradas una serie de rutas y metodos, que hacen funcionalidades logicas especificas, que pueden ser consumidas mediante HTTP por cualquier tipo de sistema que entienda HTTP. Por ejemplo, un metodo para crear usuarios, metodos para hacer registros, eliminar registros, busquedas, etc. Cada uno de estos metodos tendra definida una ruta especifica y un metodo HTTP especifico (GET, PUT, etc). Normalmente las rutas van a devolver los datos en formato XML o JSON. El servicio estara disponible por ejemplo, para aplicaciones web, aplicaciones mobiles o cualquier otro sistema.
<br><br>
1- En general, las Api Rest representan recursos. Las rutas deberian definirse en terminos del recurso, y mediante los metodos HTTP definir la accion sobre ese recurso.
Por ejemplo,  DELETE /producto/123 

11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header? <br>


El header forma parte de un request, y su función es la de enviar información adicional sobre el contexto del request.<br>
Por ejemplo el campo Accept-* especifica que formato es preferido y aceptado en el response.<br>
User-Agent que indica el navegador desde el cual el cliente se esta comunicando.<br>
Finalmente, el Content-Type indica qué tipo de contenido será devuelto<br>
Por ejemplo <br>
Content-Type: text/html; charset=utf-8<br>
Content-Type: application/pdf<br>
Content-type: application/Json<br>
Content-Type: application/xml<br>
Content-Type: application/javascript<br>

El Content-Type ayuda a identificar que tipo de documento o archivo se esta enviando y como renderizarlo o tratarlo.<br>
Si quisiera enviar un archivo JSON y que éste sea correctamente tratado como tal, <br>
deberia poner el Content-Type: application/json.<br>


