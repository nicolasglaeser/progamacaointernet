let num1 = document.querySelector("#num1_3");
let num2 = document.querySelector("#num2_3");
let btcalcular = document.querySelector("#btcalcular3");
let resultado = document.querySelector("#resultad03");

function calcularOperacoes() {
    let n1 = Number(num1.value) || 0;
    let n2 = Number(num2.value) || 0;
    if (n1 || n2) {
        let soma = n1 + n2;
        let subtracao = n1 - n2;
        let multiplicacao = n1 * n2;
        let divisao = n2 !== 0 ? n1 / n2 : "Divisao por zero!";
        resultado.textContent = "Soma: " + soma + ", Subtracao: " + subtracao + ", Multiplicacao: " + multiplicacao + ", Divisao: " + divisao;
    } 
}

btcalcular.onclick = function() {
    calcularOperacoes();
};