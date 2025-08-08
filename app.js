
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.


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

function validaCampoVazio(tag){    
    let campo = document.getElementById(tag);
     if(campo.value==""){
        mensagemErro(false,"O campo Nome não pode estar vazio.")
        campo.focus();        
        return false
    }else{
        mensagemErro(true,"")         
        return true
    }
}
function limparCampo(tag){
    let campo = document.getElementById(tag);
    campo.value = "";
}


function mensagemErro(tipo,txtMensagem){
    if(!tipo){
        document.getElementById("mensagemAviso").innerText = txtMensagem;
    } else{
        document.getElementById("mensagemAviso").innerText = "";
    }
}

function ordenarLista(lista){
    lista.sort();
    ordenonarLista = lista;
}

function converterListaUppercase(lista){
    let listaMaiuscula = lista.map(item => item.toUpperCase());
     converterListaUppercase =listaMaiuscula
}

function padronizarLista(lista){
 let listaNova=ordenarLista(lista);
 lista = converterListaUppercase(listaNova);
 padronizarLista=lista;
}

function existeNaLista(Nome,listaAmigosArray){
    if (listaAmigosArray.includes(Nome)) {
        mensagemErro(false, `"${Nome}" já está na lista.`);
        return false;
    } else {
        mensagemErro(true,"");
        return true;
    }
}

function existeAtributo(campo){
    if(campo.hasAttribute("aria-invalid")){
        campo.removeAttribute("aria-invalid");
    }
}

function inclusaoVoz(){
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


