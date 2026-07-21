//import express from "express"; //ES
const express = require("express")//CJS
const app = express()
const puerto = process.env.PORT || 3500;

app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA")
})

app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}!!`);
})
