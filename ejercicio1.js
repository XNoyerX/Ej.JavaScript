let nombre = prompt("Nombre del alumno:");
let textos = [
    prompt("Primera calificación:"),
    prompt("Segunda calificación:"),
    prompt("Tercera calificación:")
];

let calificaciones = textos.map(Number);

if (
    nombre === null || nombre.trim() === "" ||
    textos.some(t => t === null || t.trim() === "") ||
    calificaciones.some(c => !Number.isFinite(c) || c < 0 || c > 10)
) {
    console.log("Error: ingresa el nombre y calificaciones válidas entre 0 y 10.");
} else {
    let promedio = (calificaciones[0] + calificaciones[1] + calificaciones[2]) / 3;
    let desempeño;

    if (promedio >= 9) {
        desempeño = "Excelente";
    } else if (promedio >= 8) {
        desempeño = "Bueno";
    } else if (promedio >= 7) {
        desempeño = "Satisfactorio";
    } else {
        desempeño = "No acreditado";
    }

    console.log("Alumno:", nombre);
    console.log("Calificaciones:", calificaciones);
    console.log("Promedio:", promedio.toFixed(2));
    console.log("Desempeño:", desempeño);
}
