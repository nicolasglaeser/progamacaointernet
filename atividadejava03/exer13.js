let raioInput = document.querySelector("#raio");
let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let raio = Number(raioInput.value);
    let area = 3.14 * raio * raio;
    resultado.textContent = `Área da pizza: ${area.toFixed(2)}`;
};