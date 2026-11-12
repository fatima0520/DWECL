// Creamos una función llamada getCopyright
// Tiene dos parámetros: name y year
function getCopyright(name, year) {

    // Creamos una variable llamada copyright
    // Unimos el nombre, un guion y el año
    let copyright = name + " - " + year;

    // Devolvemos el resultado de la variable copyright
    return copyright;
}

// Llamamos a la función y le pasamos dos argumentos:
// "OpenWebinars" será el valor de name
// 2026 será el valor de year
let result = getCopyright("OpenWebinars", 2026);

// Mostramos el resultado por consola
console.log(result);