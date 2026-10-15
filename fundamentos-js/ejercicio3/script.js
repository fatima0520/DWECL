// Crear un objeto persona

let persona = {
    nombre: "Fátima",
    edad: 20,
    estudiante: true,
    profesion: null,
    direccion: {
        ciudad: "Granada",
        pais: "España"
    },
    aficiones: ["leer", "música", "viajar"]
};

// Mostrar el objeto en la consola

console.log("Objeto persona:");
console.log(persona);

// Mostrar las propiedades en una tabla

console.table(persona);

// Mostrar el contenido en la página HTML

let resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <p><strong>Nombre:</strong> ${persona.nombre}</p>
    <p><strong>Edad:</strong> ${persona.edad}</p>
    <p><strong>Estudiante:</strong> ${persona.estudiante}</p>
    <p><strong>Profesión:</strong> ${persona.profesion}</p>
    <p><strong>Ciudad:</strong> ${persona.direccion.ciudad}</p>
    <p><strong>País:</strong> ${persona.direccion.pais}</p>
    <p><strong>Aficiones:</strong> ${persona.aficiones.join(", ")}</p>
`;
