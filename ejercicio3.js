// Credenciales de prueba
let usuarioCorrecto = "admin";
let contraseñaCorrecta = "1234";
let usuarioActivo = true;

let usuario = prompt("Nombre de usuario:");
let contraseña = prompt("Contraseña:");
let tipo = prompt("Tipo de usuario (administrador/empleado):");

if (usuario === null || usuario.trim() === "") {
    console.log("Acceso rechazado: no ingresaste el usuario.");
} else if (usuario !== usuarioCorrecto) {
    console.log("Acceso rechazado: usuario incorrecto.");
} else if (contraseña === null || contraseña !== contraseñaCorrecta) {
    console.log("Acceso rechazado: contraseña incorrecta.");
} else if (!usuarioActivo) {
    console.log("Acceso rechazado: usuario inactivo.");
} else if (tipo === "administrador") {
    console.log("Acceso al panel de administración");
} else if (tipo === "empleado") {
    console.log("Acceso al sistema de empleados");
} else {
    console.log("Acceso rechazado: tipo de usuario no válido.");
}
