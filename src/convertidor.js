function convertirARomano(num) {
    if (num <= 0 || num > 1000) return "Número fuera de rango (1-1000)";

    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let resultado = "";

    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i]) {
            resultado += simbolos[i];
            num -= valores[i];
        }
    }
    return resultado;
}

export default convertirARomano;
