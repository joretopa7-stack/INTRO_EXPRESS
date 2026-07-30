import express from "express"; //ES
//import {configDotenv} from "dotenv"
//configDotenv()
//const express = require("express")//CJS
import "dotenv/config"

const app = express()
const puerto = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA")
})

app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}!!`);
})

//Endpoint de saludo//
app.get("/misaludo/:ficha",(req,res)=>{
    const ficha = req.params.ficha

    res.send(`<h1>Saludo<h1/> <p><h3>Mi nombres es Jorge Torres de ADSO de la ficha ${ficha} y estoy en codificacion<h3/>`)
});

app.listen(puerto,()=>{
    console.log(`SERVIDOR hhttp://localhost:${puerto}
    http://127.0.0.1:${puerto}`)
});

//Otro endpoint
app.get("/clientes/:id",(req,res)=>{
    const id = req.params.id
    res.send(`<h1>Clientes<h1/> <p><h3>Soy el cliente con ID${id}<h3/>`)
});

//28-07-2026 productos y libros
app.get("/categoria", (req, res) => {
    res.send("Listado de categorías");
});



app.get("/productos/:categoria/:id", (req, res) => {
    const categoria = req.params.categoria;
    const id = req.params.id;

    res.send(`Producto ${id} de la categoría ${categoria}`);
});


app.get("/libros/:isbn", (req, res) => {
    const isbn = req.params.isbn;

    res.send(`Libro con ISBN: ${isbn}`);
});

//PARAMETROS DE RUTA A PARAMETROS DE CONSULTA

// Ruta para obtener un producto usando parámetros de consulta
app.get("/productos", (req, res) => {

    const categoria = req.query.categoria;
    const id = req.query.id;

    res.send(`Producto ${id} de la categoría ${categoria}`);

});
//Ruta para obtener un producto usando parámetros de consulta
//Prueba: http://localhost:3030/productos?categoria=tecnologia&id=10

app.get("/productos", (req, res) => {

    const categoria = req.query.categoria;
    const id = req.query.id;

    res.send(`Producto ${id} de la categoría ${categoria}`);

});


// Ruta para obtener un libro usando un parámetro de consulta
// prueba : "http://localhost:3030/libros?isbn=978958000001

app.get("/libros", (req, res) => {

    const isbn = req.query.isbn;

    res.send(`Libro con ISBN ${isbn}`);

});

// Ruta con varios parámetros de consulta
// prueba: http://localhost:3030/buscar?categoria=tecnologia&marca=sony&fecha=2026-29-07
app.get("/buscar", (req, res) => {

    const categoria = req.query.categoria;
    const marca = req.query.marca;
    const fecha = req.query.fecha;

    res.send(
        `Categoría: ${categoria}, Marca: ${marca}, Fecha: ${fecha}`
    );

});

//Rutas de consulta nuevas
// USUARIOS
//Prueba : http://localhost:3030/usuarios?nombre=Juan&edad=20

app.get("/usuarios", (req, res) => {

    const nombre = req.query.nombre;
    const edad = req.query.edad;

    res.send(`Usuario: ${nombre}, Edad: ${edad}`);

});

//PELICULAS
//prueba : http://localhost:3000/peliculas?titulo=Avatar&genero=Ciencia%20Ficcion


app.get("/peliculas", (req, res) => {

    const titulo = req.query.titulo;
    const genero = req.query.genero;

    res.send(`Película: ${titulo}, Género: ${genero}`);

});


///Parámetros de consulta (req.query): permiten enviar información al servidor a través de la URL, después del signo ?. Cada parámetro se escribe como clave=valor y se separa con &. Express recibe esos datos en el objeto req.query, lo que facilita realizar búsquedas, filtros o consultas.