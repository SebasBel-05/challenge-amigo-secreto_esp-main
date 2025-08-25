// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById('amigo');
let listaAmigos = [];
let ullistaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');

function limpiar(){
    inputAmigo.value = "";
}      

function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    console.log(listaAmigos);
    if(!inputAmigo.value){
        alert("Por favor ingrese un nombre");
    }
    limpiar();
}

 function sortearAmigo(){
    let random = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
 }