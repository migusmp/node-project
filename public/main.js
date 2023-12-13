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
    email.value = "";
    userName.value = "";
    passwd.value = "";
    getData();
    setTimeout(() => {
        searchUser(dataUsers, "migus") 
    },2000)
    
})

const infoServer = [];
const dataUsers = [];

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

function getData(){
    fetch('http://localhost:5000/usuarios')
    .then(res => res.json())
    .then(data => {
        console.log("Información del usuario:", data)
        dataUsers.push(data);
    })
    .catch(err => console.log("Error al obtener información del usuario", err))
}
// funcion para encontrar un usuario 
function searchUser(arrUsuarios, nameUser){
    const usuarioEncontrado = arrUsuarios[0].datosUsuarios.user.includes(nameUser)
    //const usuarioEncontrado = arrUsuarios.find(usuario => usuario.arrUsuarios.datosUsuarios.user === nameUser)
    console.log(usuarioEncontrado);
}

