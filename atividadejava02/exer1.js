let cotacao = document.querySelector("#cotacao1");
let btcalcular = document.querySelector("#btcalcular1");
let resultado = document.querySelector("#resultad01");

function calcularCotacao() {
let num = Number(cotacao.value);
if (num) {
    let aumento1 = num + (num * 0.01); // 1%
    let aumento2 = num + (num * 0.02); // 2%
    let aumento3 = num + (num * 0.05); // 5%
    let aumento4 = num + (num * 0.10); // 10%
    resultado.textContent = "1%: R$" + aumento1 + ", 2%: R$" + aumento2 + ", 5%: R$" + aumento3 + ", 10%: $" + aumento4;
}

}

btcalcular.onclick = function() {
    calcularCotacao();
}