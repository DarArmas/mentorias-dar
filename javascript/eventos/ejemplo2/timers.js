'use strict';
//TEMPORIZADORES

window.addEventListener('load', function () {

     var tiempo = intervalo(); //oara poder handle el setInterval 
    
    function intervalo() {
        //setInterval(callback(), milisegundos);
        //si en quisieras que solo se ejecutara una vez sera setTimeout()
         tiempo = setInterval(function () {
            var encabezado = document.querySelector("h1");

            //para que este intermitente
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);
        
        return tiempo;   //aqui va el setInterval
    }

   
    
    //pararlo con boton
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function () {
        alert("has parado el intervalo en bucle");
        clearInterval(tiempo);   //recuerda que tiempo contiene el setInterval 
    });


    //inciarlo con boton
    var start = document.querySelector("#start");

    start.addEventListener("click", function () {
        alert("Has iniciado el bucle");
       intervalo();
    });




});

