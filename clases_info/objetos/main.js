"use strict" //en todo nuestro archivo

class Ejemplo { //clase
    constructor(name,year){ //constructor
    this.name=name;
    this.year=year;
}
     age(){ //funcion
    return this.year;
    }
//constructor
//metodo funciones
}

class Saludo extends Ejemplo{
    constructor(name,year,obs){
    super(name,year);
    this.obs=obs;
}
    show(){
        return this.age()+"------>"+this.obs;
    }
}

//usar la clase
let ejemploClas =new Ejemplo("Prueba ejemplo",1990);
console.log(ejemploClas.age());

