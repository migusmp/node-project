const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const passwd = document.querySelector(".passwd");

const button = document.querySelector(".dataEnviada");
const data = {}


button.addEventListener("click", () => {
    data.correo = email.value
    data.user = userName.value
    data.password = passwd.value
    enviarData(data);
})

const infoServer = [];
const datos = {
    nombre: 'Miguel Angel',
    id: 1
}
const datos1 = {
    nombre: 'Maria',
    id: 2
}

function enviarData(datosAEnviar) {
    fetch("http://localhost:5000/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosAEnviar)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data)
            document.getElementById('mensaje').innerText = data.mensaje;
            infoServer.push(data);
        })
        .catch(error => {
            console.log("Error al enviar solicitud:", error)
        })
}


