
// Variables de diferentes tipos

let nombre = "Fátima";
let edad = 20;
let estudiante = true;
let ciudad= "Granada";
let telefono = "641 58 68 64";


// Mostrar información en la consola

console.log("Nombre:", nombre, "- Tipo:", typeof nombre);

console.error("Edad:", edad, "- Tipo:", typeof edad);

console.info("Estudiante:", estudiante, "- Tipo:", typeof estudiante);

console.debug("Ciudad:", ciudad, "- Tipo:", typeof ciudad);

console.log("Teléfono:", telefono, "- Tipo:", typeof telefono);


// Mostrar los datos en la página HTML

let resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <div class="dato">
        <strong>Nombre:</strong> ${nombre}
        <br>
        Tipo: ${typeof nombre}
    </div>

    <div class="dato">
        <strong>Edad:</strong> ${edad}
        <br>
        Tipo: ${typeof edad}
    </div>

    <div class="dato">
        <strong>Estudiante:</strong> ${estudiante}
        <br>
        Tipo: ${typeof estudiante}
    </div>

    <div class="dato">
        <strong>Ciudad:</strong> ${ciudad}
        <br>
        Tipo: ${typeof ciudad}
    </div>

    <div class="dato">
        <strong>Teléfono:</strong> ${telefono}
        <br>
        Tipo: ${typeof telefono}
    </div>
`
