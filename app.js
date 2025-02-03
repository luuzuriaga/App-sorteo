function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = "";
  } else {
    alert("No has ingresado ningún nombre.");
  }
}

function sortearAmigo() {
  const lista = document.getElementById("listaAmigos");
  const amigos = lista.getElementsByTagName("li");
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  const indiceGanador = Math.floor(Math.random() * amigos.length);
  const nombreGanador = amigos[indiceGanador].textContent;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="nombreGanador" style="color:rgb(255, 64, 0);">El ganador es: ${nombreGanador}</li>`;
}
