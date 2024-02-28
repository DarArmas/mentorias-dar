'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

//voy a sacar un json de una api rest fake
var usuarios = [];

//esto es una promesa
getUsuarios()
            .then(data => data.json())  //convierteme a json (recuerda que todo se manda en string)
            .then(users => {
            listadoUsuarios(users.data);
    
            return getInfo();  //aqui la promesa va a parar toda la cadena por 3 segundos
            })
            .then(data => {
                div_profesor.innerHTML = data;
                
                 return getJanet(); //para que me haga la siguiente promesa
            })
            .then(data => data.json())  //es una peticion nueva, transformala
            .then(user => {
                mostrarJanet(user.data);
            })
            .catch(error => {
                        alert("Error en las peticiones");
            });

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=1');
}


function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'victorrobles.com.es'
    };
    
    //HACER PROMESA DESDE 0
    return new Promise((resolve,reject) => {
         var profesor_string = "";
         
         setTimeout(function(){
             profesor_string = JSON.stringify(profesor);
              if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
         
                return resolve(profesor_string);
         }, 3000);
         
         
        
         
    });
    
   
}


            //recibe JSON
function listadoUsuarios(usuarios){
    //recorrer arreglo usuarios
            usuarios.map((user,i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + ' - ' + user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre);
                document.querySelector(".loading").style.display = 'none';
            });
}

function mostrarJanet(user){
    
                let nombre = document.createElement('h4');
                let avatar = document.createElement('img');
                
                nombre.innerHTML = user.first_name + " " + user.last_name;
                avatar.src = user.avatar;
                avatar.width = '100';
                
                div_janet.appendChild(nombre);
                div_janet.appendChild(avatar);
                document.querySelector("#janet .loading").style.display = 'none';
        
}