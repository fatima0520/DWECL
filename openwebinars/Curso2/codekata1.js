// --- ARRAY ---
// Variable de tipo array
let namedCollection = ["Armando", "Alejandro", "David"];

console.log(namedCollection);
console.log(namedCollection[0]); // Para acceder a un solo dato del array mediante su índice


// --- SET ---
// Variable de tipo Set (puede contener datos de cualquier tipo)
let enumu = new Set([1, 2, true, "holi", 2.2]);

console.log(enumu);
// Al no tener índices, no se puede acceder a sus elementos como en un array (ej. enumu[0] daría undefined)
console.log(enumu.has("fati")); // Mediante .has() compruebas si existe ese elemento; si está devuelve true, si no, false
//Nueva funcion es añadir nuevos elementos conel add(___)
enumu.add("fati"); // Añade un nuevo elemento al Set
console.log(enumu.has("fati")); // Ahora sí devuelve true, ya que el elemento se ha añadido

// --- MAP ---
//objeto no primitivo
let mapeo= new Map([
    //clave valor 
    ["1","fati"],
    ["2","aitana"],
    [5,"sara"]

]);
console.log(mapeo);//Muestro los valores con su clave 
mapeo.set(2,"alba");// Añade un nuevo elemento al Map
console.log(mapeo);
// Con .get() obtenemos el valor mediante su clave.
console.log(mapeo.get("2"));
console.log(mapeo.get(2));


//--- OBJECT ---
let objeto={
    name:"Armando",
    surname:"Torres"
};
// Para acceder a los valores no hace falta poner [] ni nada con el .nombrepropiedad puedes acceder al valor 
console.log(objeto.surname); 
console.log(objeto.name);
console.log(objeto.surnames);// Si ejecutamos a una propiedad que no existe no nos va a dar error si no que nos dará undefined


// --- DATE (Fechas) ---
// Crea un objeto con la fecha y hora actuales
let currentDate = new Date();
console.log(currentDate);

// ERROR CORREGIDO: Antes decía "new Data()", lo cual da error porque no existe. Debe ser "new Date()"
let secondCurrentDate = new Date();
console.log(secondCurrentDate);