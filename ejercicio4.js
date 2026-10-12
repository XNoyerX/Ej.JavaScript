let texto = prompt("Ingresa un número entero entre 1 y 20:");
let numero = Number(texto);

if (
    texto === null || texto.trim() === "" ||
    !Number.isInteger(numero) || numero < 1 || numero > 20
) {
    console.log("Error: ingresa un número entero entre 1 y 20.");
} else {
    console.log("Tabla del " + numero);
    for (let i = 1; i <= 12; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
