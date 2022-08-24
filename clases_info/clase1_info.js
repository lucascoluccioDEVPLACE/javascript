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


function square(x){
    return x*x;
}
square(4);
/*const square=function(x){
    return x*x;
}*/


//ejercicio hacer tabla de multiplicacion con 2 variables
