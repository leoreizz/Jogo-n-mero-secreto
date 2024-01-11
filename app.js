  //  let titulo = document.querySelector("hi");
  //  titulo.innerHTML = "Jogo do numero secreto";
  //  let paragrafo = document.querySelector("P")
  //  paragrafo.innerHTML = "Escolha um numero"
let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 a 10");
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById("reiniciar").removeAttribute("disabled");
        exibirTextoNaTela("p", mensagemTentativas)}
    else if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número é menor")}
    else{
        exibirTextoNaTela("p", "o numero é maior");
        tentativas++;
        limparCampo();
        
    }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function GerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeElementosNaLista == numeroLimite){
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}