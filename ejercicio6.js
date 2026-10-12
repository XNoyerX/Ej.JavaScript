function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir entre cero.";
    }
    return a / b;
}

let texto1 = prompt("Ingresa el primer número:");
let texto2 = prompt("Ingresa el segundo número:");

if (
    texto1 === null || texto1.trim() === "" ||
    texto2 === null || texto2.trim() === "" ||
    !Number.isFinite(Number(texto1)) ||
    !Number.isFinite(Number(texto2))
) {
    console.log("Error: debes ingresar dos números válidos.");
} else {
    let num1 = Number(texto1);
    let num2 = Number(texto2);
    let operacion = prompt("Operación: +, -, * o /");
    let resultado;

    switch (operacion) {
        case "+":
            resultado = sumar(num1, num2);
            break;
        case "-":
            resultado = restar(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            break;
        case "/":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida.";
    }

    console.log("Resultado:", resultado);
}
