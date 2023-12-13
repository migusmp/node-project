import express from 'express'
import path from 'node:path'
import bodyParser from 'body-parser';
import http, { createServer } from 'node:http'

const app = express();
const port = 5000;
const server = createServer(app)
const dataUsers = [];
const datosAEnviar = {};
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
    datosAEnviar.correo = datos.correo
    datosAEnviar.user = datos.user
    datosAEnviar.password = datos.password

    console.log("Datos de usuarios registrados:", dataUsers)
    // Hacer algo con los datos
    console.log("Datos recibidos del cliente:", datos)
    //Enviar respuesta al cliente
    res.json({mensaje: `Bienvenido al servidor ${datos.user}!!!
    No te olvides de tu correo: ${datos.correo}
    Y de la contraseña ${datos.password} menos aún
    `})
});
// Ruta para obtener información de los usuarios
app.get("/usuarios", (req, res) => {
    //Enviar información al usuario como respuesta
    res.json({datosUsuarios: datosAEnviar})
})


server.listen(port, () => {
    console.log(`Servidor Iniciado en la dirección http://localhost:${port}`)
})
server.on('connection', (socket) => {
    console.log("Un usuario se ha conectado")
})


