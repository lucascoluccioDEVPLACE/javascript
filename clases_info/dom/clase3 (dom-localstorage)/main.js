//Almacenar item en localstore
//setItem("nombre item",valor que va tener el item)

localStorage.setItem("ejemplo", "prueba de ejemplo");
localStorage.apellido = "prueba";

//getItem("nombre del item")
console.log(localStorage.getItem("apellido"));
console.log(localStorage.ejemplo);

//Eliminar o remover item
//removeItem("Nombre del item")

setTimeout(() => {
  localStorage.removeItem("ejemplo");
}, 1000);

console.log(localStorage.ejemplo);

//Limpiar todo el storage

/*setTimeout(() => {
  localStorage.clear();
}, 1000);*/
var person = [];
console.log(localStorage.ejemplo);

sessionStorage.setItem("ejemplo", "ejemplo de prueba session");
var person = [];
function inicial() {
  if (localStorage.getItem("name") !== null) {
    person = JSON.parse(localStorage.getItem("name"));
  }
}
function agregar() {
  inicial();
  var name = document.getElementById("nombre");
  person.push({ name: name.value });
  setLocalStore();
  name.value = " ";
}
function eliminar() {
  inicial();
  var name = document.getElementById("nombre");
  let names = name.value;
  let index = person.findIndex(
    (data) => data.name.toLowerCase() === names.toLowerCase()
  );
  console.log(index);
  person.splice(index, 1);
  setLocalStore();
}

function setLocalStore() {
  localStorage.setItem("name", JSON.stringify(person));
}
/*
var person = {
  name: "lucas",
  lastName: "coluccio",
  dni: 38551218
};*/
//localStorage.setItem("person", person);
//no se puede guardar objetos directos al local storage
//se debe parsear a string
//↓↓Manera correcta de guardar objeto
localStorage.setItem("person", JSON.stringify(person));
//alert(JSON.parse(localStorage.getItem("person")));
