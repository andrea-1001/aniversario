function generarMensaje() {
    var mensajes = [
        "Eres la razón por la que sonrío cada día.",
        "Mi amor por ti crece más con cada latido de mi corazón.",
        "Eres mi luz en la oscuridad, mi sol en la tormenta.",
        "A tu lado, cada día es el Día de San Valentín.",
        "Eres mi persona favorita en el mundo entero.",
        "Tu amor es el mejor regalo que he recibido.",
        "Eres la melodía que alegra mi corazón.",
        "Contigo, cada momento es mágico.",
        "Eres mi sueño hecho realidad.",
        "Te amo demasiado princesa",
        "Eres mi evangelline",
    ];


    var mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    document.getElementById("mensaje").innerHTML = mensaje;

    mostrarNotificacion("Te amo");

}
 
function mostrarNotificacion(mensaje) {
    var notificacion = document.getElementById("notificacion");
    notificacion.innerHTML = `<i class="fas fa-heart-pulse"></i> ${mensaje}`;
    notificacion.classList.add("mostrar");

    setTimeout(function() {
        notificacion.classList.remove("mostrar");
    }, 1000);
}


 // Obtén el botón por su ID
    var inicioButton = document.getElementById("inicio");
     inicioButton.addEventListener("click", function() {
    // Redirige a la página deseada (cambia "tu_pagina.html" por la URL de la página a la que quieres redirigir)
        window.location.href = "index.html";
});