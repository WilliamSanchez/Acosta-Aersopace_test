//alert("Ola mundo!");
//var mensagem = "Ola mundo";
//console.log(mensagem);

/*
function mostraAlerta(){
   alerta("Functional!");
}

var botao = document.querySelector("#botaoEnviar");
botao.onclick = mostrarAlerta;
*/

var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho]')

function mostraTamanho(){
   outputTamanho.value = inputTamanho.value
}

//inputTamanho.onchange = mostraTamanho
