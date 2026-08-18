//import express from "express"; //ES
//import {configDotenv} from "dotenv"
//configDotenv()
const express = require("express")//CJS
import "dotenv/config"

const app = express()
const puerto = process.env.PORT || 3000;

app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}!!`)
});

app.listen(puerto,()=>{
    console.log(`SERVIDOR hhttp://localhost:${puerto}
    http://127.0.0.1:${puerto}`)
});

 app.get("/",(req,res)=>{
    res.send(`<h1>Api Aprendices</h1>`)
 });
