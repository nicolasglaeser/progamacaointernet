let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let total = 101.53;
    let valorPorPessoa = total / 3;
    resultado.textContent = `Carlos: R$${valorPorPessoa.toFixed(2)}, André: R$${valorPorPessoa.toFixed(2)}, Felipe: R$${valorPorPessoa.toFixed(2)}`;
};