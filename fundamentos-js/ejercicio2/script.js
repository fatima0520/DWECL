
// Crear un array vacío

let numeros = [];


// Rellenar el array con 100 números aleatorios

for (let i = 0; i < 100; i++) {

    let numero = Math.floor(Math.random() * 101);

    numeros.push(numero);
}


// Mostrar el contenido del array en la consola

console.table(numeros);


// Filtrar los números entre 20 y 50

let numerosFiltrados = numeros.filter(function(numero) {
    return numero >= 20 && numero <= 50;
});


// Mostrar los números filtrados en la consola

console.log("Números entre 20 y 50:");

console.table(numerosFiltrados);


// Mostrar los números filtrados en HTML

let resultado = document.getElementById("resultado");

numerosFiltrados.forEach(function(numero) {

    resultado.innerHTML += `
        <div class="numero">
            ${numero}
        </div>
    `;

});
