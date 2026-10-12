let alumnos = [];
let valido = true;

for (let i = 0; i < 5; i++) {
    let nombre = prompt("Nombre del alumno " + (i + 1) + ":");
    let matricula = prompt("Matrícula:");
    let carrera = prompt("Carrera:");
    let textoPromedio = prompt("Promedio general (0 a 10):");
    let promedio = Number(textoPromedio);

    if (
        nombre === null || nombre.trim() === "" ||
        matricula === null || matricula.trim() === "" ||
        carrera === null || carrera.trim() === "" ||
        textoPromedio === null || textoPromedio.trim() === "" ||
        !Number.isFinite(promedio) || promedio < 0 || promedio > 10
    ) {
        console.log("Datos no válidos. Ejecuta nuevamente el programa.");
        valido = false;
        break;
    }

    alumnos.push({
        nombre: nombre,
        matricula: matricula,
        carrera: carrera,
        promedio: promedio
    });
}

if (valido && alumnos.length === 5) {
    let suma = 0;
    let aprobados = 0;
    let mejorAlumno = alumnos[0];

    for (let alumno of alumnos) {
        console.log("Nombre:", alumno.nombre);
        console.log("Matrícula:", alumno.matricula);
        console.log("Carrera:", alumno.carrera);
        console.log("Promedio:", alumno.promedio);
        console.log("--------------------");

        suma += alumno.promedio;

        if (alumno.promedio >= 7) {
            aprobados++;
        }
        if (alumno.promedio > mejorAlumno.promedio) {
            mejorAlumno = alumno;
        }
    }

    console.log("Alumno con mayor promedio:", mejorAlumno.nombre);
    console.log("Promedio más alto:", mejorAlumno.promedio);
    console.log("Promedio general del grupo:", (suma / alumnos.length).toFixed(2));
    console.log("Alumnos con promedio igual o superior a 7:", aprobados);
}
