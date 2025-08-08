
//funções genéricas.

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