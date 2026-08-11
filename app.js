import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/",(req,res) => {
    res.send(`<h1>Primer Endpoint Ruta Raiz</h1>`)
})

app.listen(PORT,() => {
    console.log(`Servidor: http://localhost:${PORT}`)
})

//ENDPOINT SEND.STATUS
app.get("/rutaEjemplo",(req,res)=>{
    res.status(200)
    res.json({"mesaje": "Hola mundo"})
})

