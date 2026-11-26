
 //--CONDICIONALES AVANZADOS 

// SWITCH:
// Evalúa una expresión y, dependiendo del resultado, ejecuta el bloque de código del caso que coincida.
// Si ningún caso coincide, se ejecuta el bloque default.
// break sirve para salir del switch y evitar que se sigan ejecutando otros casos.

// CONDICIONAL TERNARIO:
// Evalúa una condición y devuelve un valor dependiendo del resultado.
// Estructura: condición ? valor_si_true : valor_si_false
// Si la condición es verdadera (true), devuelve el primer valor.
// Si es falsa (false), devuelve el segundo valor.

/* let myFruit="Watermelon"
switch(myFruit){
    case "orange":
    case "lemon":
        console.log("Citric");
        break;
    case "banana":
        console.log("Tropical");
        break;
    case "Watermelon":
        console.log("Big fruit");
        break;

} */

// TERNARIO:
// Comprobamos si una fruta está dentro del conjunto (Set).
// El método .has() devuelve true si encuentra la fruta y false si no la encuentra.
// Según el resultado, el operador ternario devuelve un mensaje.

let fruit="grape";
let availableFruits=new Set(["lemon","banana","watermelon"]);
let isAvailable=(availableFruits. has(fruit)?"available":"not available" );
console.log(isAvailable);

fruit="lemon";
isAvailable=(availableFruits. has(fruit)?"available":" not available" );
console.log(isAvailable);


// OPERADOR IN:
// Comprueba si una propiedad existe dentro de un objeto.
// Devuelve true si encuentra la propiedad y false si no existe.
// En este caso, comprueba si la fruta indicada existe como propiedad del objeto.

let myFavoriteFruit="orange";
let myAvailableFruits={lemon: "Citric",watermelon:"Big Fruit", banana:"Tropical"};
console.log(myFavoriteFruit in myAvailableFruits);// Comprueba si "orange" existe como propiedad del objeto.

myFavoriteFruit="lemon";
console.log(myFavoriteFruit in myAvailableFruits);// Comprueba si "lemon" existe como propiedad del objeto.


// OPERADOR IN CON ARRAYS:
// Cuando utilizamos in con un array, NO comprueba si existe un valor dentro del array.
// Comprueba si existe un índice (posición) dentro del array.
// Por eso, 1 in myAvailableFruits devuelve true si existe el índice 1.

myAvailableFruits=["lemon","orange","banana"];
console.log(1 in myAvailableFruits);// Comprueba si existe el índice 1 dentro del array.
