//import express from "express"; //ES
//import {configDotenv} from "dotenv"
//configDotenv()
const express = require("express")//CJS
import "dotenv/config"

const app = express()
const puerto = process.env.PORT || 3000;

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