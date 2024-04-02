$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
 
// Obtén el botón por su ID
 var SanValentinButton = document.getElementById("SanValentin");

 // Agrega un evento de clic al botón
 SanValentinButton.addEventListener("click", function() {
     // Redirige a la página deseada (cambia "tu_pagina.html" por la URL de la página a la que quieres redirigir)
     window.location.href = "sanvalentin.html";
 });

 // Obtén el botón por su ID
 var sobrepiensoButton = document.getElementById("sobrepienso");

 // Agrega un evento de clic al botón
 sobrepiensoButton.addEventListener("click", function() {
     // Redirige a la página deseada (cambia "tu_pagina.html" por la URL de la página a la que quieres redirigir)
     window.location.href = "sobrepensamiento.html";
 });