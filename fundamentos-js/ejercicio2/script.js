
//creo un array vacío
let numeros = [];
//for repite el proceso 100 veces 
for (let i = 0; i < 100; i++) {
    //se genera números  aleatorios y se añade cada numero al array
    // Math.random() genera un número decimal aleatorio
    // Multiplicamos por 100 para obtener un número entre 0 y casi 100
    // Math.floor() redondea hacia abajo y elimina los decimales
    // + 1 hace que los números estén entre 1 y 100
    // push() añade cada número al final del array numeros
    numeros.push(Math.floor(Math.random() * 100) + 1);
}
//se muestra los números  en forma tabla 
console.table(numeros);
//crea otro array con los números que están entre 1 y 20.
// filter() recorre el array numeros y selecciona los elementos
let filtrados = numeros.filter(numero => numero >= 1 && numero <= 20);

console.log("Números entre 1 y 20:");
// Mostramos solamente los números filtrados en forma de tabla
console.table(filtrados);
