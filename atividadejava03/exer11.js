let salarioInput = document.querySelector("#salario");
let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let salario = Number(salarioInput.value);
    let imposto = salario * 0.08; // 8% de imposto
    let salarioComImposto = salario - imposto;
    let aumento = salarioComImposto * 0.15; // 15% de aumento
    let salarioFinal = salarioComImposto + aumento;

    resultado.textContent = `Salário Inicial: R$${salario.toFixed(2)}, Imposto: R$${imposto.toFixed(2)}, Salário com Imposto: R$${salarioComImposto.toFixed(2)}, Salário Final: R$${salarioFinal.toFixed(2)}`;
};