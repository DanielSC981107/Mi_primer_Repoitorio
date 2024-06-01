//Tipos de datos

/* Datos primitivos number, booleane, string, NaN, Null, undefine, simboly, Bigint */
/* Diferencia entre NaN, Null y undefine.
NaN Representa la ausencia de un dato 
Null Se el asigna que no hay ningun valor 
undefine Es cuando 
simboly reperesant un identificador unico
*/

let nombre = "Daniel";
let numero = 25;
let caja;

//Datos complejos clases, objetos_arrays and function

let amigos = ["Rodolfo", "Jose", "Mariana",["Hamlet","Karen","Dante"]];
console.log(amigos[3][0]);

//Los arrays son tambien considerados objetos

let persona ={
    nombre: "Jose",
    edad: 24,
    estadoCivil: false,
}
console.log(typeof amigos);

function saludar(saludo){
    console.log(saludo);
    return 1;
}
//Todos llas funciones vienen con un return implicito 
//saludar("Hola mundo");
//alert("Hola mundo");
//var alert = "Hola mundo";
//alert("Hello World");
//Ya no se usa la palabra reservada var porque sobreescribe las funciones del lenguaje como ejemplo de arriba

function suma(num1,num2){
    console.log(num1 + num2);
}

suma(10,30);
