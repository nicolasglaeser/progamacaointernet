let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let btCalcular = document.querySelector("#btCalcular");
let resultados = document.querySelector("#resultados");

function calcularDistancia() {
    let x1Num = Number(x1.value);
    let y1Num = Number(y1.value);
    let x2Num = Number(x2.value);
    let y2Num = Number(y2.value);

    let distancia = Math.sqrt(Math.pow(x2Num - x1Num, 2) + Math.pow(y2Num - y1Num, 2));

    resultados.textContent = `A distância entre os pontos é ${distancia.toFixed(2)}`;
}

btCalcular.onclick = function() {
    calcularDistancia();
};