let nombre = prompt("Nombre del cliente:");
let textoCompra = prompt("Importe de la compra:");
let vip = prompt("¿Es cliente VIP? (si/no)");

if (
    nombre === null || nombre.trim() === "" ||
    textoCompra === null || textoCompra.trim() === "" ||
    !Number.isFinite(Number(textoCompra)) || Number(textoCompra) < 0
) {
    console.log("Error: ingresa un nombre y un importe válido.");
} else if (vip === null || !["si", "no"].includes(vip.trim().toLowerCase())) {
    console.log("Error: responde si o no para indicar si eres VIP.");
} else {
    let compra = Number(textoCompra);
    vip = vip.trim().toLowerCase();

    let porcentaje = 0;
    if (compra >= 3000) {
        porcentaje = 0.15;
    } else if (compra >= 1000) {
        porcentaje = 0.10;
    } else if (compra >= 500) {
        porcentaje = 0.05;
    }

    let descuentoInicial = compra * porcentaje;
    let subtotal = compra - descuentoInicial;
    let descuentoVIP = vip === "si" ? subtotal * 0.05 : 0;
    let total = subtotal - descuentoVIP;

    console.log("Cliente:", nombre);
    console.log("Compra: $" + compra.toFixed(2));
    console.log("Descuento inicial: $" + descuentoInicial.toFixed(2));
    console.log("Descuento VIP: $" + descuentoVIP.toFixed(2));
    console.log("Descuento total: $" + (compra - total).toFixed(2));
    console.log("Total a pagar: $" + total.toFixed(2));
}
