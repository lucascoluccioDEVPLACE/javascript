//antes
var saludar=function(nombre){
    return 'hola '+nombre;
};
console.log(saludar('juan'));

//ahora
let saludo=nombre=>`Hola ${nombre}`;
console.log(saludo('juan'));

//Dos o mas parametros ANTES
var sumar=function(a,b){
    return a+b;
}
console.log(sumar(3,4));
//Dos o mas parametros AHORA
let suma=(a,b) => a + b;
console.log(suma(3,4));

//Funciones sin parametros ANTES
var bienvenidaAntes=function(){
    return 'hola a Todos';
}
console.log(bienvenidaAntes());

//Funciones sin parametros AHORA
let bienvenidaAhora=()=>`Hola a todos`;
console.log(bienvenidaAhora());


let fecha= new Date(); //variable de tipo fecha 
var horas=fecha.getHours();
//realizar funcion que diga dia tarde o noche

//ANTES
var dias=function(hr){
    if (horas<5)
        return 'Es tarde';
    else if (hr>=6 && hr <=11)
        return 'Buen dia';
    else if (hr>=12 && hr <=18)
        return 'Buena tarde';
    else 
        return 'Buenas noches';
}
console.log(dias(horas));

//AHORA
let diasahora=(hr)=>{
    if (horas<5)
        return 'Es tarde';
    else if (hr>=6 && hr <=11)
        return 'Buen dia';
    else if (hr>=12 && hr <=18)
        return 'Buena tarde';
    else 
        return 'Buenas noches';
};
console.log(dias(horas));

//Recorrido de array
var numero=[4,3,2,1,8,10,3,5];
//antes
numero.forEach(function(num){
    console.log(num);
});
//ahora
numero.forEach((num)=>{
    console.log(num);
});

//map() permite recorrer y modificar elementos presentes en el array y retorna la misma longitud que la original
var resultNumero=numero.map(num => num+1); //recorrimos y sumamos un elemento a cada uno
console.log(resultNumero);

//filter() mostrara los elementos que condicionamos en el filtro
resultNumero=numero.filter(num=>num==4 || num==3);
console.log(resultNumero);


//forEach() reocrre el array y podemos iterar el contenido del mismo
resultNumero=numero.forEach((element,index)=>{
    if (element==1){
        element=element+1;
    }
    console.log(`${element} se encuentra en el indice ${index}`);
});

//find() retorna la primera coincidencia
resultNumero=numero.find(num=>num>3);
console.log(resultNumero);

//sort() ordena forma ascendente, se puede crear funcion para que tambien sea descendente.
resultNumero=numero.sort();
console.log(resultNumero);
resultNumero=numero.sort((a,b)=> a>b ? -1:1);
console.log(resultNumero);

//some() itera el array y retorna un valor booleano si como minimo uno de los elementos estan presentes en el array
resultNumero=numero.some(num=>num>3); //true
resultNumero=numero.some(num=>num>34); //false

//every() igual que el some() todos los elementos deben cumplir la condicion
resultNumero=numero.every(num=>num>3); //false
resultNumero=numero.every(num=>num>0); //true

//join() une todos los elementos de un array en una cadena
resultNumero=numero.join(''); //sin delimitador
console.log(resultNumero);
resultNumero=numero.join(',');  //con delimitador coma
console.log(resultNumero);

//reduce() 
resultNumero=numero.reduce((acumulador,current)=> acumulador+current); //suma cada elemento 
console.log(resultNumero);

//findIndex() retorna el indice del primer elemento encontrado en el array segun la condicion, en caso que no exista retorna -1
resultNumero=numero.findIndex(num=>num===3); //1
console.log(resultNumero);

//fill() desde una posicion dada, cambia algun parametro
console.log(numero); //[10, 8, 5, 4, 3, 3, 2, 1]
resultNumero=numero.fill(5,1);
console.log(resultNumero);
resultNumero=numero.fill(5,3,5);
console.log(resultNumero);

//flat() crea un nuevo array con todos los elementos de sub-array concatenados recursivamente
var flatArray=[1,2,3,5,5,[8,9,10]];
console.log(flatArray);
console.log(flatArray.flat());

//isArray() //devuelve si el elemento es array o no
console.log(Array.isArray(numero));
console.log(Array.isArray('33'));

var ejemplo='holamundo';
//from() crear un array
resultNumero=Array.from(ejemplo);