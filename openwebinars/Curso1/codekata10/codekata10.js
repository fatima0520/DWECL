//MI CÓDIGO JAVASCRIPT
let texto = document.querySelector(".input");
document.querySelector(".boton").addEventListener("click", function (event) {

   alert("el texto que has escrito es: " + texto.value);
});
//CODIGO JAVASCRIPT DEL PROFESOR
/* let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

buttonSaluda.addEventListener("click", function(event) {
    if (inputName.value !== "") {
        alert("Hola " + inputName.value);
        inputName.value = "";
    }
}); */