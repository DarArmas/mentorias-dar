'use strict';

//EVENTO: FUNCION QUE SE EJECUTA CUANDO SUCEDE ALGO
//cuando me termina de cargar el dom, ahora si ya hazme todo
window.addEventListener('load', function () {
    var boton = document.querySelector("#boton");

//este evento se dispara con onclick, pero existe
//-ondbclick (on double click)

    function cambiarColor() {
        var bg = boton.style.backgroundColor;

        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }


        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }


//es exactamente lo mismo que llamarlo desde el elemento html
    //tipo de evento, funcion callback
    boton.addEventListener('click', function () {
        cambiarColor();
        this.style.border  ="10px solid black";
    });


//PASARLE EL MOUSE POR ENCIMA

//paso el mouse
    boton.addEventListener('mouseover', function () {
        boton.style.backgroundColor = "blue";
    });

//quito el mouse
    boton.addEventListener('mouseout', function () {
        boton.style.backgroundColor = "#ccc";
    });

//EVENTOS DEL TECLADO 
    var input = document.querySelector("#campo_nombre");

//cuando das clicK en un campo
    input.addEventListener('focus', function () {
        console.log("[focus] Estas dentro del input");
    });

//cuando te sales del campo
    input.addEventListener('blur', function () {
        console.log("[blut] Estas fuera del input");
    });

//Keydown
    //le puedes pasar la informacion del evento a la funcion callback
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] Pulsaste esta tecla", String.fromCharCode(event.keyCode));
    });


//Keypress se ejecuta despues de keydown
//keypress solo sucede cuando la tecla ha sido undida y soltada en el objeto input
    input.addEventListener('keypress', function (event) {
        console.log("[keypress] Estas pulsandoe esta tecla", String.fromCharCode(event.keyCode));
    });

//cuando levantas el dedo de la tecla
    input.addEventListener('keyup', function (event) {
        console.log("[keyup] Acabas de pulsar esta tecla", String.fromCharCode(event.keyCode));
    });



}); //final evento load

