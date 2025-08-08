
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

//import * as Biblioteca from './appGenerico.js';
importScripts('./appGenerico.js');
let listaAmigosArray=[];

function adicionarAmigo(){
    if(validaCampoVazio("amigo")){
        let campo = document.getElementById("amigo");
        if(existeNaLista(campo.value.toUpperCase(), listaAmigosArray)){
            listaAmigosArray.push(campo.value.toUpperCase());
            imprimirListaAmigos("listaAmigos", listaAmigosArray);
            limparCampo("amigo");
        } 
    }   
}

function imprimirListaAmigos(tag, lista){  
    lista = padronizarLista(lista);  
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = lista.map(listaAmigosArray => `<li>${lista}</li>`).join('');    
}


function sortearAmigo(){    
    let fimLista = listaAmigosArray.length;
    let numsorteado = parseInt(Math.random() * fimLista + 1);     
    let Sorteado = document.getElementById("resultado");
    Sorteado.innerHTML = listaAmigosArray[numsorteado];
}

function iniciarLista(){
    listaAmigos = [];
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("mensagemAviso").innerText = "";
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}



