let productos = [];

function registrarProducto() {
    let codigo = prompt("Código del producto:");

    if (codigo === null || codigo.trim() === "") {
        console.log("Código no válido.");
        return;
    }

    codigo = codigo.trim();

    if (productos.some(producto => producto.codigo === codigo)) {
        console.log("Ya existe un producto con ese código.");
        return;
    }

    let nombre = prompt("Nombre del producto:");
    let textoPrecio = prompt("Precio:");
    let textoCantidad = prompt("Cantidad disponible:");
    let categoria = prompt("Categoría:");
    let precio = Number(textoPrecio);
    let cantidad = Number(textoCantidad);

    if (
        nombre === null || nombre.trim() === "" ||
        categoria === null || categoria.trim() === "" ||
        textoPrecio === null || textoPrecio.trim() === "" ||
        textoCantidad === null || textoCantidad.trim() === "" ||
        !Number.isFinite(precio) || precio < 0 ||
        !Number.isInteger(cantidad) || cantidad < 0
    ) {
        console.log("Datos no válidos. No se registró el producto.");
        return;
    }

    productos.push({
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    });

    console.log("Producto registrado correctamente.");
}

function consultarInventario() {
    if (productos.length === 0) {
        console.log("El inventario está vacío.");
        return;
    }

    for (let producto of productos) {
        console.log(producto);
    }
}

function buscarProducto() {
    let codigo = prompt("Ingresa el código que deseas buscar:");

    if (codigo === null) {
        console.log("Búsqueda cancelada.");
        return;
    }

    let producto = productos.find(p => p.codigo === codigo.trim());

    if (producto) {
        console.log("Producto encontrado:", producto);
    } else {
        console.log("Producto no encontrado.");
    }
}

function calcularValorInventario() {
    let total = 0;

    for (let producto of productos) {
        total += producto.precio * producto.cantidad;
    }

    console.log("Valor total del inventario: $" + total.toFixed(2));
}

function mostrarExistenciasBajas() {
    let bajos = productos.filter(producto => producto.cantidad < 5);

    if (bajos.length === 0) {
        console.log("No hay productos con menos de cinco unidades.");
    } else {
        console.log("Productos con existencias bajas:");
        for (let producto of bajos) {
            console.log(producto.nombre + ": " + producto.cantidad + " unidades");
        }
    }
}

let opcion;

do {
    opcion = prompt(
        "SISTEMA DE INVENTARIO\n" +
        "1. Registrar producto\n" +
        "2. Consultar inventario\n" +
        "3. Buscar producto por código\n" +
        "4. Calcular valor del inventario\n" +
        "5. Mostrar productos con menos de 5 unidades\n" +
        "6. Salir"
    );

    switch (opcion) {
        case "1":
            registrarProducto();
            break;
        case "2":
            consultarInventario();
            break;
        case "3":
            buscarProducto();
            break;
        case "4":
            calcularValorInventario();
            break;
        case "5":
            mostrarExistenciasBajas();
            break;
        case "6":
            console.log("Saliendo del sistema.");
            break;
        case null:
            console.log("Programa finalizado.");
            break;
        default:
            console.log("Opción no válida.");
    }
} while (opcion !== "6" && opcion !== null);
