import express from 'express'
import path from 'node:path'
import bodyParser from 'body-parser';
import http, { createServer } from 'node:http'

const app = express();
const port = 3000;
const server = createServer(app)
const dataUsers = [];

app.get('/', (req, res) => {
    const filePath = path.join(process.cwd(),'public','index.html')
    res.sendFile(filePath)
})
// Servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'))
// Configurar middleware para parsear datos JSON
app.use(bodyParser.json())


// Manejar la solicitud POST desde el cliente
app.post('/', (req, res) => {
    const datos = req.body;
    dataUsers.push(datos);
    console.log("Usuarios registrados:", dataUsers)
    // Hacer algo con los datos
    console.log("Datos recibidos del cliente:", datos)
    //Enviar respuesta al cliente
    res.json({mensaje: `Bienvenido al servidor ${dataUsers[0].nombre} ${dataUsers[0].apellido}!!!`})
});


server.listen(port, () => {
    console.log(`Servidor Iniciado en la dirección http://localhost:${port}`)
})
server.on('connection', (socket) => {
    console.log("Un usuario se ha conectado")
})


