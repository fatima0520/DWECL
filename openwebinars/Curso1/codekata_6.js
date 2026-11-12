// PRÁCTICA DE CONDICIONALES

// Creamos una variable year de tipo Number
let year = 2023;

// Comprobamos si year es exactamente igual a 2023
// === compara tanto el valor como el tipo de dato
if (year === 2023) {
    console.log("son iguales");
}

// Comprobamos si year es diferente de "2023"
// !== compara valor y tipo de dato
// 2023 es Number y "2023" es String
if (year !== "2023") {
    console.log("son distintos por diferentes tipo");
}

// Comprobamos si year es mayor que 2022
if (year > 2022) {
    console.log("ok");
}

// Cambiamos el valor de year a 2021
year = 2021;

// && significa AND (Y)
// Las dos condiciones deben cumplirse
if (year >= 2021 && year < 2023) {
    console.log("ok");
}

// || significa OR (O)
// Basta con que una de las condiciones se cumpla
if (year >= 2021 || year == false) {
    console.log("ok");
}

// Cambiamos el valor de year a false
year = false;

// ! significa NOT (NO)
// Invierte el valor booleano
if (!year) {
    console.log("ok");
}