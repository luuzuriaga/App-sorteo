// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  
  if (nombre) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = "";
    input.focus();
    
    // Limpiar el resultado anterior si existe
    limpiarResultado();
  } else {
    mostrarAlerta("Por favor, ingresa un nombre válido.");
  }
}

// Función para manejar la tecla Enter
function handleKeyPress(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  const lista = document.getElementById("listaAmigos");
  const amigos = lista.getElementsByTagName("li");
  
  if (amigos.length === 0) {
    mostrarAlerta("No hay amigos en la lista para sortear. Agrega al menos un participante.");
    return;
  }
  
  // Seleccionar un índice aleatorio
  const indiceGanador = Math.floor(Math.random() * amigos.length);
  const nombreGanador = amigos[indiceGanador].textContent;
  
  // Mostrar el resultado
  mostrarGanador(nombreGanador);
}

// Función para mostrar el ganador
function mostrarGanador(nombre) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="winner-message">
      ¡El ganador es!
      <span class="winner-name">${nombre}</span>
    </div>
  `;
}

// Función para limpiar el resultado
function limpiarResultado() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}

// Función para mostrar alertas personalizadas
function mostrarAlerta(mensaje) {
  alert(mensaje);
}

// Función para reiniciar el juego
function reiniciarJuego() {
  // Confirmar antes de reiniciar
  const confirmar = confirm("¿Estás seguro de que deseas reiniciar? Se borrarán todos los nombres y resultados.");
  
  if (confirmar) {
    // Limpiar la lista de amigos
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Limpiar el resultado
    limpiarResultado();
    
    // Limpiar el input
    const input = document.getElementById("amigo");
    input.value = "";
    input.focus();
  }
}

// Event listener para limpiar el resultado cuando se escribe
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("amigo");
  input.addEventListener("input", function() {
    if (input.value.trim()) {
      limpiarResultado();
    }
  });
});