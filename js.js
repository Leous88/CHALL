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

// Función para restaurar los mensajes y la imagen originales
function restaurarOriginales() {
    const resultadoMensaje1 = document.querySelector('.mensaje1');
    resultadoMensaje1.textContent = "Ningún mensaje fue encontrado";

    const resultadoMensaje2 = document.querySelector('.mensaje2');
    resultadoMensaje2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";

    const resultadoMuñeco = document.querySelector('.muñeco');
    resultadoMuñeco.hidden = false;
}

// luego Asignar eventos a los botones
document.querySelector('.encriptar').addEventListener('click', encriptarTexto);
document.querySelector('.desencriptar').addEventListener('click', desencriptarTexto);
document.querySelector('.copiar').addEventListener('click', function() {
    // Solo hay un botón de copiar en la sección de resultados
    const resultadoMensaje2 = document.querySelector('.mensaje2');
    copyTextToClipboard(resultadoMensaje2.textContent);
});

// encriptar texto
function encriptarTexto() {
    const inputText = document.querySelector('.texto_ingreso').value;
    if (inputText.trim() === "") { // Si el campo de texto está vacío
        restaurarOriginales();
        return;
    }

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

    // Vaciar el campo de texto de ingreso
    document.querySelector('.texto_ingreso').value = "";

    // Hacer que el mensaje encriptado sea clickeable para copiar al portapapeles
    resultadoMensaje2.addEventListener('click', function() {
        copyTextToClipboard(encryptedText);
    });
}

// funcion para volver texto normal
function desencriptarTexto() {
    const inputText = document.querySelector('.texto_ingreso').value;
    if (inputText.trim() === "") { // Si el campo de texto está vacío
        restaurarOriginales();
        return;
    }
    
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

   // Cambiar el contenido del mensaje 1 a "¡Su mensaje ha sido desencriptado!"
   const resultadoMensaje1 = document.querySelector('.mensaje1');
   resultadoMensaje1.textContent = "¡Su mensaje ha sido desencriptado!";     

   // Cambiar el contenido del mensaje 2
   const resultadoMensaje2 = document.querySelector('.mensaje2');
   resultadoMensaje2.textContent = decryptedText; 
   
   const resultadoMuñeco = document.querySelector('.muñeco');

   // ocultamos el muñeco (la imagen)
   resultadoMuñeco.hidden = true;

   // Vaciar el campo de texto de ingreso
   document.querySelector('.texto_ingreso').value = "";

   // Hacer que el mensaje desencriptado sea clickeable para copiar al portapapeles
   resultadoMensaje2.addEventListener('click', function() {
       copyTextToClipboard(decryptedText);
   });
}

// Función para copiar texto al portapapeles
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Mensaje copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
