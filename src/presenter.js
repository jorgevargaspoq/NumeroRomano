import { convertirARomano } from "./convertidor.js";

window.convertirNumero = function() {
    const input = document.getElementById("numeroInput");
    const resultado = document.getElementById("resultado");
    const numero = parseInt(input.value);

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    resultado.textContent = convertirARomano(numero);
};
