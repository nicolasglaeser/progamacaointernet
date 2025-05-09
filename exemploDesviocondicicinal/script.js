let inputNota1 = document.querySelector ("#inputNota1");
let inputNota2 = document.querySelector ("#inputNota2");
let btcalcular = document.querySelector ("#btcalcular");
let resultado1 = document.querySelector ("#resultado1");

function verificaAprovacao(){

    let nota1 = Number(inputNota1.value);
    let nota2 = Number(inputNota2.value);
    let media = (nota1 + nota2) /2;

    //APROVADO: média 6.0 ou maior
    //REPROVADO: média menor que 6.0
    if(media >=6.0){
        resultado1.textContent = "Parabens voce esta Aprovado!!!";
    }else{
        resultado1.textContent = "Nao desista, tente novamente!";
    }

}

btcalcular.onclick = function(){
    verificaAprovacao();
}