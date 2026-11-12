/* TIPOS DE VARIABLES */

// Número decimal (Number)
let price = 5.55;

// Valor booleano (true o false)
let active = false;

// Variable declarada pero sin valor (undefined)
let sample;

// Variable que contiene un valor nulo (null)
let sampleNull = null;

// Creamos una variable llamada adress que contiene un texto
let adress = "45 B";

// typeof permite conocer el tipo de dato de una variable
console.log(typeof adress);
console.log(typeof price);
console.log(typeof active);
console.log(typeof sample);
console.log(typeof sampleNull);




// Number() intenta convertir el texto en un número
let booleanAddress = Number(adress);

// Mostramos el resultado por consola
console.log(booleanAddress);