// Codigo para el desarrollo del Challenge "Amigo Secreto"

// Array para alamacenar el nombre de un amigo
let amigos = [];

//Funcion para agregar amigos
function agregarAmigo () {
    let nombre = document.getElementById("nombreAmigo").value;

    //Validar que el nombre solo contiene letras, no numeros, no espacios
    let soloLetrasRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;

    //Validar entrada
    
    if (nombre.trim() === "") { //Ingresar informacion
        alert("Por favor, ingrese un nombre.");
    } else if (!soloLetrasRegex.test(nombre)) { //Si no ingresa letras
        alert("Por favor, ingrese letras sin espacios ni números."); 
    } else {
        amigos.push(nombre);
        console.log(nombre);
        actualizarListaDeAmigos();
        document.getElementById("nombreAmigo").value = "";
    }
}

//Actualizar la lista de amigos
function actualizarListaDeAmigos() { //Sincoriniza lo que esta en el arreglo
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = ""; //borra todos los elementos de la lista HTML
    for (let i=0 ; i<amigos.length; i++) { //Recorre cada nombre en el arreglo
        let li = document.createElement("li"); // Crea un nuevo elemento de la lista, se añade a lista visible
        li.textContent = amigos[i]; 
        lista.appendChild (li);
    }
}

// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return; 
    }
    
    // Selecciona un índice aleatorio del arreglo de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre del amigo secreto usando el índice aleatorio
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia los resultados anteriores

    // Muestra el nombre del amigo secreto en un solo párrafo
    resultado.innerHTML = `<p>El amigo secreto es: ${amigoSecreto}</p>`;
} 

function reiniciarJuego () {
    //Vaciar el array de amigos
    amigos.length = 0;

    //limpiar lista en pantalla
   document.getElementById("listaAmigos").innerHTML = "";

    //borrar mensaje de sorteo
    document.getElementById("resultado").innerHTML = "";

    //Limpiar el input de texto
    document.getElementById('nombreAmigo').value = "";

    alert('El juego se ha reiniciado.');
}





