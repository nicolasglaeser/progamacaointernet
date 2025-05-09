let cotacao = document.querySelector("#cotacao1");
let btcalcular = document.querySelector("#btcalcular1");
let resultado = document.querySelector("#resultad01");

function calcularCotacao() {
    let valor = Number(cotacao.value) || 0;
    if (valor) {
        let aumento1 = valor + (valor * 0.01);
        let aumento2 = valor + (valor * 0.025);
        let aumento3 = valor + (valor * 0.10);
        resultado.textContent = "1%: R$" + aumento1 + ", 2,5%: R$" + aumento2 + ", 10%: R$" + aumento3;
    } else {
        resultado.outerHTML = "Digite um valor válido!";
    }
}

btcalcular.onclick = function() {
    calcularCotacao();
};