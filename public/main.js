const inputNombre = document.querySelector(".data");
const inputApellido = document.querySelector(".dataApellido")
const button = document.querySelector(".dataEnviada");
const data = {}
const obtenerData = (input, input2) => {
    
    
    console.log(data)
   
}

button.addEventListener("click", () => {
    const data = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    }
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
    fetch("http://localhost:3000/", {
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

