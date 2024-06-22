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
saludar("Hola");
function saludar(saludo){ /*fiuncion declarada*/
    console.log(saludo);
    return 1;
}
  /*funcion expresada*/
let saludar2 = function (saludar2){
    console.log(saludar2);
    return 5;
}
let caja1 = saludar2;

console.log(typeof saludar2);
console.log(typeof caja1);

(function(){
    console.log("hello world");
})


let saludar3 = function(saludar3){
    console.log("hello worldx2");
    return (function(){
        console.log("hello woldx3");
    })()
}
saludar3();


let saludar4 = hi => hi;
//saludar4("Hola mundox2");


//Todos llas funciones vienen con un return implicito 
//saludar("Hola mundo");
//alert("Hola mundo");
//var alert = "Hola mundo";
//alert("Hello World");
//Ya no se usa la palabra reservada var porque sobreescribe las funciones del lenguaje como ejemplo de arriba

function suma(num1,num2){
    console.log(num1 + num2);
}

//suma(10,30);
/*buenos dias 5 a 11 am
buenastardes 12 a 6pm
buenas noches 7pm a 4am*/

let hora = {
};


if(hora >= 1  && hora <= 4 ){
    console.log("Buenas noches");
}else if(hora >= 5 && hora <= 11){
    console.log("Buenos dias");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas noches");
}else if(hora >= 19 && hora <= 24){
    console.log("Buenas noches");
}else if(hora >= 25 || hora <=0){
    console.log("Invalido")
}

/*for(let i = 1; i <=10 ; i++){
   console.log(i)
   if(i == 5){
    break
   }
}*/
/*
for(let i = 10 ; i >= 1 ; i--){
    console.log(i);
    if(i == 5){
        
    } tarea
}
*/

    /* se poner otro numero que salga numero invalido */