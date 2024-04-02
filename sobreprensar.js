//function mostrarImagenAleatoria() {
    var imagenes = [
     { src:"https://unsplash.com/es/fotos/una-mujer-con-un-traje-purpura-de-pie-junto-a-una-mujer-con-una-falda-rosa-8Nkj88U03Gk"},
     { src:"https://unsplash.com/es/fotos/una-vista-aerea-de-una-ciudad-cubierta-de-nieve-hjpbZ9h6KmU"},
        "imagenes/imagen3.gif",
        // Agrega aquí las rutas de las demás imágenes
    ];

    var imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    var contenedor = document.getElementById("contenedor-imagen");
    contenedor.innerHTML = `<img src="${imagenAleatoria}" alt="Imagen aleatoria">`;
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