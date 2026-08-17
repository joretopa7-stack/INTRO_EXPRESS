import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/",(req,res) => {
    res.send(`<h1>Primer Endpoint Ruta Raiz</h1>`)
})

app.listen(PORT,() => {
    console.log(`Servidor: http://localhost:${PORT}`)
})

//ENDPOINT SEND.STATUS y REQ.QUERY EJEMPLO CON PARAMETRO DE RUTA Y CONSULTA
//1. res.status() + res.json()
app.get("/rutaEjemplo",(req,res)=>{
    res.status(200)
    res.json({"mesaje": "Hola mundo"})
});
//2. Parámetro de ruta — req.params
app.get("/usuario/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        mensaje: "Usuario encontrado",
        id: id
    });
});
//3. Parámetro de consulta — req.query
// /usuarios?nombre=Carlos&edad=20
app.get("/usuarios", (req, res) => {
    const nombre = req.query.nombre;
    const edad = req.query.edad;

    res.status(200).json({
        mensaje: "Datos recibidos",
        nombre: nombre,
        edad: edad
    });
});
//4. Parámetro de ruta + consulta
// /mascotas/15?estado=activo
app.get("/mascotas/:id", (req, res) => {
    const id = req.params.id;
    const estado = req.query.estado;

    res.status(200).json({
        mensaje: "Mascota encontrada",
        id: id,
        estado: estado
    });
});
// Otro ejemplo
// /mascotas/15/citas?estado=pendiente
app.get("/mascotas/:id/citas", (req, res) => {
    const idMascota = req.params.id;
    const estado = req.query.estado;

    res.status(200).json({
        mensaje: "Citas consultadas correctamente",
        mascotaId: idMascota,
        estado: estado
    });
});
// Ruta + varios query
// /usuarios/8/mascotas?estado=activo&especie=perro
app.get("/usuarios/:id/mascotas", (req, res) => {
    const usuarioId = req.params.id;
    const estado = req.query.estado;
    const especie = req.query.especie;

    res.status(200).json({
        mensaje: "Mascotas consultadas correctamente",
        usuarioId: usuarioId,
        estado: estado,
        especie: especie
    });
});