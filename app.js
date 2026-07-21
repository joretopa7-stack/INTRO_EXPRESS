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
app.get("/misaludo",(req,res)=>{
    res.send(`<h1>Saludo<h1/> <p><h3>Mi nombres es Jorge Torres de ADSO de la fiche 3407180 y estoy en codificacion<h3/>${mivar}`)
})

app.listen(puerto,()=>{
    console.log(`SERVIDOR hhttp://localhost:${puerto}
    http://127.0.0.1:${puerto}`)
});