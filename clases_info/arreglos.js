const arreglo=[20,'ejemplo',true,100,20];
const arreglo2=new Array("Ejemplo","20");
console.log(arreglo[2]);
console.log(arreglo.length);

for (let i=0;i<arreglo.length;i++){
    console.log(arreglo[i]);
}
arreglo.forEach(function(valor){
    console.log(valor);
});
arreglo.forEach(numero=>console.log(numero));
arreglo.forEach((numero,i)=>{
    console.log("Position: "+i+" Valor: "+numero);
});
var x=10;
arreglo.push(x); //inserte elemento al final y retorna length
arreglo.unshift("dos"); //inserta elemento al pricnipio y retorna length del array

arreglo2.pop(); //elimina ultimo elemento del arreglo y lo retorna
console.log(arreglo.shift()); //elimina primer elemento del arreglo y lo retorna


const arregloClonado=arreglo.slice(); //clona el arreglo

var arregloNuevo = ["dos",3,["1",2,true,"hola"]];

const [uno,dos,tres]=['10',20,40,50,80];

console.log(arreglo2.concat(arreglo));

arreglo.includes(20); //si existe o no dicho elemento en el array
console.log(arreglo.lastIndexOf(20)); 
console.log(arreglo.indexOf(20));
console.log(arreglo);
console.log(arreglo.reverse()); //da vuelta el arreglo
arreglo.sort(); //ordena ascendente
var array=[5,10,15,20,25,30,35,40,45,50,55];
array.splice(0,1); //eliminar elementos a partir de una posicion
console.log(array);
/*
var lista=Array.from(document.getElementsByTagName("li"));*/