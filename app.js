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