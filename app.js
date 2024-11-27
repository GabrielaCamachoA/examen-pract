const nameInput = document.getElementById("name");
const edadInput = document.getElementById("edad");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const messageCarrea = document.getElementById("message2");
const messageCurso = document.getElementById("message3");

function enviarDatos() {
    if (nameInput.value == "" || edadInput.value == ""|| emailInput.value == "" || phoneInput.value == "" || messageInput.value == "") {
        alert("Llena todos los datos, por favor");
    }else{
        alert(`            Nombre del estudiante: ${nameInput.value}
            Edad: ${edadInput.value}
            Teléfono: ${phoneInput.value}
            Email: ${emailInput.value}
            Ciudad de referencia: ${messageInput.value}
            En que carrera esta interesad@? ${messageCarrea.value}
            En que curso esta interesad@? ${messageCurso.value}`)
    }
}