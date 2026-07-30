---

# Documentación API con Express.js

## ¿Qué es una API?

Una API (Application Programming Interface) es un conjunto de reglas que permite la comunicación entre diferentes aplicaciones. Una API funciona mediante solicitudes realizadas por un cliente y respuestas generadas por un servidor utilizando diferentes métodos HTTP.

En este proyecto se desarrolló una API utilizando Express.js, donde se crearon diferentes endpoints que permiten responder solicitudes realizadas desde un navegador o herramientas de prueba como Postman.

---

# ¿Qué es Express.js?

Express.js es un framework de Node.js utilizado para desarrollar aplicaciones web y APIs de manera sencilla y organizada.

Permite crear servidores, definir rutas, manejar solicitudes HTTP y enviar respuestas al cliente. Express facilita el desarrollo del backend reduciendo la cantidad de código necesario para crear una aplicación.

---

# Requerimientos

Para ejecutar este proyecto es necesario contar con los siguientes elementos:

* Node.js instalado.
* npm (Node Package Manager).
* Visual Studio Code o un editor de código.
* Archivo `.env` para manejar variables de entorno.
* Navegador web o Postman para realizar pruebas.

---

# Comandos utilizados

## Inicializar proyecto

```bash
npm init -y
```

Este comando permite crear el archivo `package.json`, donde se almacenan las configuraciones y dependencias del proyecto.

---

## Instalar Express

```bash
npm install express --save
```

Permite instalar el framework Express.js dentro del proyecto.

---

## Instalar dotenv

```bash
npm install dotenv --save
```

Permite utilizar variables de entorno almacenadas en un archivo `.env`.

---

## Ejecutar servidor

```bash
node app.js
```

Permite iniciar la aplicación ejecutando el archivo principal del proyecto.

---

## Ejecutar con Nodemon

```bash
npx nodemon app.js
```

Nodemon permite reiniciar automáticamente el servidor cuando se realizan cambios en el código.

---

# Configuración del servidor

Para crear el servidor se importa Express:

```javascript
import express from "express";
```

Después se crea una instancia de la aplicación:

```javascript
const app = express();
```

También se cargan las variables de entorno:

```javascript
import "dotenv/config";
```

El puerto del servidor se define mediante:

```javascript
const puerto = process.env.PORT || 3000;
```

Si existe un puerto configurado en el archivo `.env`, utilizará ese valor. En caso contrario, utilizará el puerto 3000.

---

# Creación del servidor

El servidor se inicia utilizando el método `listen()`:

```javascript
app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}`);
});
```

Este método permite que la aplicación quede esperando solicitudes realizadas por los usuarios.

---

# Métodos HTTP utilizados

En este proyecto se utiliza principalmente el método HTTP GET.

## GET

El método GET permite solicitar información al servidor sin modificar datos.

Ejemplo:

```javascript
app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA");
});
```

Cuando se realiza la petición:

```
GET http://localhost:3000/
```

El servidor responde:

```
Hola ficha 3407180 del SENA
```

---

# Endpoints del proyecto

## Endpoint principal

Ruta:

```
/
```

Código:

```javascript
app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA");
});
```

Función:

Permite verificar que el servidor está funcionando correctamente.

---

# Endpoint de saludo

Ruta:

```
/misaludo/:ficha
```

Código:

```javascript
app.get("/misaludo/:ficha",(req,res)=>{

    const ficha = req.params.ficha;

    res.send(`Mi nombre es Jorge Torres de ADSO de la ficha ${ficha}`);

});
```

Ejemplo de solicitud:

```
GET /misaludo/3407180
```

Respuesta:

```
Mi nombre es Jorge Torres de ADSO de la ficha 3407180
```

Este endpoint utiliza un parámetro de ruta llamado `ficha`.

---

# Endpoint Clientes

Ruta:

```
/clientes/:id
```

Código:

```javascript
app.get("/clientes/:id",(req,res)=>{

    const id = req.params.id;

    res.send(`Soy el cliente con ID ${id}`);

});
```

Ejemplo:

```
GET /clientes/10
```

Respuesta:

```
Soy el cliente con ID 10
```

---

# Endpoint Categorías

Ruta:

```
/categoria
```

Código:

```javascript
app.get("/categoria",(req,res)=>{
    res.send("Listado de categorías");
});
```

Función:

Devuelve un listado de categorías.

---

# Endpoint Productos

Ruta:

```
/productos/:categoria/:id
```

Código:

```javascript
app.get("/productos/:categoria/:id",(req,res)=>{

    const categoria = req.params.categoria;
    const id = req.params.id;

    res.send(`Producto ${id} de la categoría ${categoria}`);

});
```

Ejemplo:

```
GET /productos/lacteos/15
```

Respuesta:

```
Producto 15 de la categoría lacteos
```

Este endpoint recibe dos parámetros de ruta:

* Categoría del producto.
* Identificador del producto.

---

# Endpoint Libros

Ruta:

```
/libros/:isbn
```

Código:

```javascript
app.get("/libros/:isbn",(req,res)=>{

    const isbn = req.params.isbn;

    res.send(`Libro con ISBN ${isbn}`);

});
```

Ejemplo:

```
GET /libros/9789581234567
```

Respuesta:

```
Libro con ISBN 9789581234567
```

---

# Parámetros de ruta (req.params)

Los parámetros de ruta son valores enviados dentro de la URL que permiten identificar un recurso específico.

Se representan utilizando dos puntos (`:`).

Ejemplo:

```javascript
app.get("/clientes/:id",(req,res)=>{

    const id = req.params.id;

});
```

Solicitud:

```
GET /clientes/20
```

Valor obtenido:

```
req.params.id = 20
```

En este proyecto se utilizan en:

* `/misaludo/:ficha`
* `/clientes/:id`
* `/productos/:categoria/:id`
* `/libros/:isbn`

---
#Ejecucion / probar las API`S
* `npm run dev`: se configuro en los scripts de package.json
  
# Parámetros de consulta (req.query)

Los parámetros de consulta son valores enviados después del signo `?` en una URL.

Se utilizan principalmente para realizar búsquedas, filtros u ordenar información.

Se obtienen mediante:

```javascript
req.query
```

Ejemplo:

Solicitud:

```
GET /productos?categoria=lacteos&id=15
```

Código:

```javascript
app.get("/productos",(req,res)=>{

    const categoria = req.query.categoria;
    const id = req.query.id;

    res.send(`Producto ${id} de la categoría ${categoria}`);

});
```

Respuesta:

```
Producto 15 de la categoría lacteos
```

---

# Diferencia entre parámetros de ruta y consulta

| Parámetros de ruta                 | Parámetros de consulta                 |
| ---------------------------------- | -------------------------------------- |
| Forman parte de la URL principal.  | Se agregan después del signo ?.        |
| Identifican un recurso específico. | Permiten filtrar o buscar información. |
| Se obtienen con req.params.        | Se obtienen con req.query.             |
| Son normalmente obligatorios.      | Son normalmente opcionales.            |

Ejemplo parámetro de ruta:

```
/clientes/10
```

Busca el cliente con ID 10.

Ejemplo parámetro de consulta:

```
/clientes?ciudad=Bogota
```

Busca clientes filtrados por ciudad.

---

# Pruebas de la API

Las rutas pueden probarse utilizando un navegador o Postman.

Ejemplos:

```
GET http://localhost:3000/

GET http://localhost:3000/misaludo/3407180

GET http://localhost:3000/clientes/5

GET http://localhost:3000/categoria

GET http://localhost:3000/productos/lacteos/15

GET http://localhost:3000/libros/9789581234567
```

---

# Conclusiones

Durante el desarrollo de esta API se implementó un servidor utilizando Express.js y Node.js. Se crearon diferentes endpoints utilizando el método GET para responder solicitudes del usuario.

Además, se trabajó con parámetros de ruta mediante `req.params`, permitiendo recibir información directamente desde la URL para identificar recursos específicos.

También se estudiaron los parámetros de consulta mediante `req.query`, los cuales permiten enviar filtros y datos adicionales sin modificar la estructura de las rutas.

El desarrollo de esta API permite comprender los fundamentos del backend, la creación de servicios web y la comunicación entre cliente y servidor mediante HTTP.
