
// primero validar tipo de texto
function isValidInput(text) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(text);
}
document.querySelector('.texto_ingreso').addEventListener('input', function(event) {
    const inputText = event.target.value;

    if (!isValidInput(inputText)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        event.target.value = inputText.slice(0, -1); // Elimina el último carácter ingresado
    }
});

// luego Asignar eventos a los botones
document.querySelector('.encriptar').addEventListener('click', encriptarTexto);
document.querySelector('.desencriptar').addEventListener('click', desencriptarTexto);
document.querySelectorAll('.copiar').forEach(button => {
    button.addEventListener('click', copyToClipboard);
});

// encriptar texto

function encriptarTexto() {
    const inputText = document.querySelector('.texto_ingreso').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');


    // Cambiar el contenido del mensaje 1 a "Su mensaje ha sido encriptado"
    const resultadoMensaje1 = document.querySelector('.mensaje1');
    resultadoMensaje1.textContent = "¡Su mensaje ha sido encriptado!";

    // Cambiar el contenido del mensaje 2

    const resultadoMensaje2 = document.querySelector('.mensaje2');
    resultadoMensaje2.textContent = encryptedText; 
    
    const resultadoMuñeco = document.querySelector('.muñeco');

    // ocultamos el muñeco (la imagen)
    resultadoMuñeco.hidden = true;

}

// funcion para volver texto normal
function desencriptarTexto() {
    const inputText = document.querySelector('.texto_ingreso').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

   // Cambiar el contenido del mensaje 1 a "Su mensaje ha sido Desencriptado"
   const resultadoMensaje1 = document.querySelector('.mensaje1');
   resultadoMensaje1.textContent = "¡Su mensaje ha sido Desencriptado!";     

   // Cambiar el contenido del mensaje 2

   const resultadoMensaje2 = document.querySelector('.mensaje2');
   resultadoMensaje2.textContent = decryptedText; 
   
   const resultadoMuñeco = document.querySelector('.muñeco');

   // ocultamos el muñeco (la imagen)
   resultadoMuñeco.hidden = true;

}