const express = require ("express")
const app = express()
//Configuracion de body-json
app.use(express.json())
const sistemaArchivos = require("fs")
const path = require("path")
const ruta = require ("path")
const { json } = require("stream/consumers")
const PORT = process.env.PORT || 3030;

const rutaArchivoJson = ruta.join(__dirname, "aprendices.json")
app.get("/",(req,res)=>{
    res.send("Hola  3407180 del SENA")
})


// LISTO PARA CREAR ENPOINTS 

app.get("/api/aprendices",(req,res)=>{
    sistemaArchivos.readFile(rutaArchivoJson,"utf-8",(error , datos) => 
    {
        if (error){
            return res.status(500).json({Error: "Error conexion bd."})
        }
        const listaAprendices = JSON.parse(datos)
        res.json(listaAprendices)
    })
    
})

//ENDPOINT PARA ADICIONAR 

app.post("/api/aprendices",(req , res ) => {
    // capturar los datos enviados 
    const datosAprendiz = req.body
        sistemaArchivos.readFile(rutaArchivoJson,"utf-8",(error , datos) => 
    {
        if (error){
            return res.status(500).json({Error: "Error conexion bd."})
        }
        const listaAprendices = JSON.parse(datos)
            // agregar a la lista javascript
        listaAprendices.push(datosAprendiz)
            //escritura de archivo 
        sistemaArchivos.writeFile(rutaArchivoJson, JSON.stringify (listaAprendices , null,
            2
        ), (error) => {
            if(error){
                return res.json({Error: "No se puede registrar"})
            }
            res.status(201).json(datosAprendiz)
        })
        
    })

})

//endpoint para editar 

app.put("/api/aprendices/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const datosAprendiz = req.body;

    sistemaArchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: "Error conexion bd."
            });
        }

        const listaAprendices = JSON.parse(datos);

        // Buscar el aprendiz
        const aprendiz = listaAprendices.find(aprendiz => aprendiz.id === id);

        if (!aprendiz) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        // Actualizar datos
        aprendiz.nombre = datosAprendiz.nombre;
        aprendiz.apellido = datosAprendiz.apellido;
        aprendiz.edad = datosAprendiz.edad;

        // Guardar archivo
        sistemaArchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede actualizar"
                    });
                }

                res.json(aprendiz);
            }
        );
    });
});


// Endpoint para eliminar
app.delete("/api/aprendices/:id", (req, res) => {

    const id = parseInt(req.params.id);

    sistemaArchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: "Error conexion bd."
            });
        }

        const listaAprendices = JSON.parse(datos);

        // Buscar el aprendiz
        const indice = listaAprendices.findIndex(
            aprendiz => aprendiz.id === id
        );

        // Si no existe
        if (indice === -1) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        // Eliminar aprendiz
        const aprendizEliminado = listaAprendices.splice(indice, 1);

        // Guardar archivo actualizado
        sistemaArchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede eliminar"
                    });
                }

                res.json({
                    mensaje: "Aprendiz eliminado correctamente",
                    aprendiz: aprendizEliminado[0]
                });
            }
        );
    });
});

app.listen(PORT,()=>{
    console.log(`Servidor http://localhost:${PORT}`);
})