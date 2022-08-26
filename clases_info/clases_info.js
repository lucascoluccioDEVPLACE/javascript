const a=20;

var b=5
var c=8;
var d =5;

if (a>b){
    console.log("El mayor es A");
}
else if (a<b)
    console.log("El mayor es B");

switch(c){
    case 1:console.log("C es 1"); break;
    case 2:console.log("C es 2"); break;
    case 3:console.log("C es 3");break;
    default:console.log("C es 0");break;
}

for (var i=1;i<10;i++){
    console.log(i);
}

const arr=[2,3,5,"hola",7,1];

console.log("empiezo for in");
for (let i in arr){
    console.log(i);
}
console.log("cambio a on");
for (let i of arr){  //devuelve los elementos del arr
    console.log(i);
}

if ((a<b) && (c<b) || (c===d)){ //es igual a poner !c

}

console.log(square(4));
function square(x){
    return x*x;
}

/*const square=function(x){
    return x*x;
}*/


//ejercicio hacer tabla de multiplicacion con 2 variables

//Clase 2-↓

/*4 tipos de variables
-Undefined: cunado no se definio un valor
var x;
- Number: variables de tipo numero flotante
var x=6.2;
- Boolean: de tipo vof
- Texto: de tipo string
var x="Hola";

*/
console.log("Clase 2↓");
//let x=prompt("Ingrese valor");
let x=5;
parseInt(x); //de esta manera haces que el value sea int.
typeof(x); //consultas de que tipo es el valor

//Funciones matematicas para realizar varias operaciones matematicas
console.log("Math");
console.log(Math.round(8.50));  //redondea
console.log(Math.ceil(8.89)); //trimmea 

console.log("fechas");
let fecha= new Date(); //variable de tipo fecha 
fecha.getDate(); //toma el dia del mes 1-31
fecha.getMonth(); //toma el mes; 0-11 (hay que sumarle 1 para mostrar)
fecha.getFullYear(); //Año xxxx
fecha.getDay(); //dia semana 0-6
fecha.getHours();
fecha.getMinutes;
fecha.getSeconds();
console.log(fecha.toDateString()); //imprime la fecha actual


//cadenas
var cadena="Ejemplo de prueba"
cadena.length
cadena.replace('j','s')
console.log(cadena)
console.log(cadena.substr(3,5))
var xr=cadena.split(' '); //separa en arreglo de strings por un delimitador, en este caso un especio
console.log(xr)
console.log(cadena.toUpperCase()+cadena.toLowerCase());
//funcion para limpiar espacios:
cadena="    Ejemplo de prueba     ";
console.log("tamaño es: "+cadena.length);
console.log(cadena.trim());  //limpia espacios antes y dps

console.log(cadena.includes("Ejemplo"))//retorna true o false dependiendo si esta o no ese substring (es case sensitive)
console.log(cadena.includes("Ejemplo",0))//retorna true o false deppendiendo si esta o no ese substring en esa posicion
console.log(cadena.search("prueba")) //retorna posicion de la substring


//numeros
let num=5.70;
let num2=0.0000565;
console.log(num2.toExponential());
console.log(num.toFixed()) //redondea
console.log(num.toFixed(4)); //agrega decimales