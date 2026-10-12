let ventas = [];
let total = 0;
let valido = true;

for (let i = 0; i < 7; i++) {
    let texto = prompt("Ingresa la venta del día " + (i + 1) + ":");

    if (
        texto === null || texto.trim() === "" ||
        !Number.isFinite(Number(texto)) || Number(texto) < 0
    ) {
        console.log("Error: importe no válido. Ejecuta nuevamente el programa.");
        valido = false;
        break;
    }

    let venta = Number(texto);
    ventas.push(venta);
    total += venta;
}

if (valido && ventas.length === 7) {
    let mayor = ventas[0];
    let menor = ventas[0];
    let diaMayor = 1;
    let diaMenor = 1;

    for (let i = 1; i < ventas.length; i++) {
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            diaMayor = i + 1;
        }
        if (ventas[i] < menor) {
            menor = ventas[i];
            diaMenor = i + 1;
        }
    }

    console.log("Ventas registradas:", ventas);
    console.log("Total semanal: $" + total.toFixed(2));
    console.log("Promedio diario: $" + (total / 7).toFixed(2));
    console.log("Mayor venta: día " + diaMayor + ", $" + mayor.toFixed(2));
    console.log("Menor venta: día " + diaMenor + ", $" + menor.toFixed(2));
}
