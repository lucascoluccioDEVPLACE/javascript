const person={
    fristName:'juan',
    lastName:'perez',
    age:90
  }
  
  var keys= Object.keys(person); //devuelve un array (3) ['fristName', 'lastName', 'age'] como es un array se puede recortar y mostrar los valores
  
  console.log(keys);
  
  Object.keys(person).forEach(key=>{
    let value=person[key];
    console.log(`${key}:${value}`)
  });
  
  //Object.values() traigo los valores del objeto
  var values=Object.values(person);
  console.log(values);
  
  //Object.entries() crea matriz anidada
  var entries=Object.entries(person);
  console.log(entries);
  
  //Object.assign() copia valores de un objeto a otro
  const details={
    job:"delivery",
    employer:"employer"
  };
  
  var assign=Object.assign(person,details);
  console.log(assign);
  
  //Object.freeze() impide la modificacion de las propiedades y valores del objeto
  
  var newPerson=Object.freeze(person);
  console.log(newPerson);
  newPerson.fristName="loco";
  console.log(newPerson);
  newPerson.active=true;
  
  //Object.seal() impide la adicion de nuevas propiedades al objeto, pero permite modificaciones de existentes
  newPerson=Object.seal(person);
  newPerson.firstName="Juan";
  newPerson.lastName="ramon";
  console.log("aca");
  console.log(newPerson);
  
  newPerson=Object.create(person); //crea una instancia del objeto
  

//idea del ejercicio pedido esta en https://ezw1gt.csb.app/ solo lo de js

//acceder al documento al html es el DOM
//se puede acceder al doc se puede escribir, sobreescribir un doc html por medio de js
/*
document.getElementById //por convencion se usa este
document.getElementsByClassName //por convencion este se usa para las css
document.getElementsByTagName
*/
//si quiereo acceder al titulo por ej
document.title;
//fecha de modificacion
document.lastModified;
//cabecera
document.head;
document.write('dd');//sobrescribe todo el dcouemnto
document.title='cuca'; // cambia el titulo del doc
document.querySelectorAll("p#btn"); //nos devuele la lista de elementos q cumplen con este criterio y si lo queremos usar lo deberiamos recorrer con un foreach por ejemplo

function cambiar(){
    //cambia la imagen
    document.getElementById("imagen").src="UrlS DE LA IMAGEN";
}
//si quero q se ejecute solo
setTimeout(cambiar, 1000);

