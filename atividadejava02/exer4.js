let sabores = document.querySelector("#sabores4");
let refrigerantes = document.querySelector("#refrigerantes4");
let btcalcular = document.querySelector("#btcalcular4");
let resultado = document.querySelector("#resultad04");

function calcularPizzas() {
    let numSabores = Number(sabores.value) || 0;
    let numRefrigerantes = Number(refrigerantes.value) || 0;
    if (numSabores || numRefrigerantes) {
        let valorPizza = numSabores * 12.00;
        let valorRefrigerante = numRefrigerantes * 7.00;
        let valorTotal = valorPizza + valorRefrigerante;
        resultado.textContent = "Sabores: " + numSabores + ", Refrigerantes: " + numRefrigerantes + ", Total: R$" + valorTotal.toFixed(2);
    } else {
        resultado.textContent = "Digite valores válidos!";
    }
}

btcalcular.onclick = function() {
    calcularPizzas();
};