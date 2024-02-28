'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");

//voy a sacar un json de una api rest fake
var usuarios = [];

//esto es una promesa
fetch('https://reqres.in/api/users?page=1')
            .then(data => data.json())  //convierteme a json (recuerda que todo se manda en string)
            .then(users => {
            usuarios = users.data;
            console.log(usuarios),
             
             //recorrer arreglo usuarios
            usuarios.map((user,i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + ' - ' + user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre);
                document.querySelector(".loading").style.display = 'none';
            });
});