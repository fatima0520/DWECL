//este evento click se propaga hacia arriba 
document.querySelector(".test").addEventListener("click", function (event) {
    event.stopPropagation();
    alert("le has dado click");
    
});
//para que no nos muestre la ventana de alerta al pulsar el click derecho 
/* document.addEventListener("contextmenu",function(event){
    event.preventDefault();
    alert("no se puede hacer click derecho");
}); */

window.addEventListener("click",function (event){
    console.log("has hecho click en la ventana de la web ");
});