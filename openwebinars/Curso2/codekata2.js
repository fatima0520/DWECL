let numberOne =18;
let numberTwo=33;
let result= numberOne + numberTwo;
console.log(result);
// Otra manera de que me nuestre el resultado directamente sin crear una variable en la cual tengo que guardar el resultado.
numberOne=numberOne+numberTwo;
console.log(numberOne);
// se puede hacer lo mismo con - ,* y /.

// Para saber si es par o impar.
result=numberOne % 2;
if (result==0){
    console.log("Es par");
}else if (result !== 0){
    console.log("Es impar");
}

// Incremento 
let count=0;
console.log(++count);
console.log(++count);


// Decrementos 
console.log(--count);


// Exponentes 
let numberSample=7;
let exponent=3;
// se puede hacer con datos directamente o variables 
console.log(numberSample**exponent);

// concatenar texto 
let myText="Un texto cualquiera";
console.log(myText+". Con un final cualquiera");