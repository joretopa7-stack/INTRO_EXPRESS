const express = require("express");
const app = express();

// Configuración de body-json
app.use(express.json());

const sistemaArchivos = require("fs");
const ruta = require("path");

const PORT = process.env.PORT || 3030;

const rutaArchivoJson = ruta.join(__dirname, "aprendices.json");

// Endpoint principal
app.get("/", (req, res) => {
    res.send("Hola 3407180 del SENA");
});


// ENDPOINT PARA LISTAR APRENDICES

app.get("/api/aprendices", (req, res) => {

    sistemaArchivos.readFile(
        rutaArchivoJson,
        "utf-8",
        (error, datos) => {

            if (error) {
                return res.status(500).json({
                    Error: "Error conexion bd."
                });
            }

            const listaAprendices = JSON.parse(datos);

            res.json(listaAprendices);
        }
    );
});

// ENDPOINT PARA ADICIONAR APRENDIZ


app.post("/api/aprendices", (req, res) => {

    // Capturar los datos enviados
    const datosAprendiz = req.body;

    sistemaArchivos.readFile(
        rutaArchivoJson,
        "utf-8",
        (error, datos) => {

            if (error) {
                return res.status(500).json({
                    Error: "Error conexion bd."
                });
            }

            const listaAprendices = JSON.parse(datos);

            // Agregar a la lista
            listaAprendices.push(datosAprendiz);

            // Escritura del archivo
            sistemaArchivos.writeFile(
                rutaArchivoJson,
                JSON.stringify(listaAprendices, null, 2),
                (error) => {

                    if (error) {
                        return res.status(500).json({
                            Error: "No se puede registrar"
                        });
                    }

                    res.status(201).json(datosAprendiz);
                }
            );
        }
    );
});


// ENDPOINT PARA EDITAR APRENDIZ

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



app.listen(PORT, () => {
    console.log(`Servidor http://localhost:${PORT}`);
});

// ENDPOINT PARA ELIMINAR APRENDIZ

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
        const aprendiz = listaAprendices.find(
            aprendiz => aprendiz.id === id
        );

        if (!aprendiz) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        // Eliminar aprendiz
        const nuevaLista = listaAprendices.filter(
            aprendiz => aprendiz.id !== id
        );

        // Guardar archivo actualizado
        sistemaArchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(nuevaLista, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede eliminar"
                    });
                }

                res.json({
                    mensaje: "Aprendiz eliminado correctamente",
                    aprendiz: aprendiz
                });
            }
        );
    });
});