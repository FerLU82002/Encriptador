function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  if (texto.length === 0) {
    mostrarError(muñeco, tituloMensaje, parrafo);
    return;
  }

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  muñeco.src = "./img/muñeco.png";
  tituloMensaje.textContent = "Texto encriptado con éxito";
  textomostrar.textContent = textoCifrado;
  
 
}
function copiarTexto() {
  let textoCifrado = document.getElementById("texto").value;

  if (textoCifrado.length === 0) {
    swal("Ooops!", "No hay texto para copiar", "warning");
    return;
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = textoCifrado;
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px"; // Mueve el textarea fuera de la pantalla
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  swal("Texto copiado", "El texto ha sido copiado al portapapeles", "success");
}




function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  if (texto.length === 0) {
    mostrarError(muñeco, tituloMensaje, parrafo);
    return;
  }

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  //document.getElementById("texto").value = textoCifrado;
  tituloMensaje.textContent = "Texto desencriptado con éxito";
 // parrafo.textContent = "";
  textomostrar.textContent = textoCifrado;
}

function mostrarError(muñeco, tituloMensaje, parrafo) {
  muñeco.src = "./img/muñeco.png";
  tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  swal("Ooops!", "Debes ingresar un texto", "warning");
}
