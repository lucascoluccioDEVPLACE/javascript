var cont = 0;

function guardaDatos() {
  let dni = document.getElementById("dni").value; //agarro valor ini del html
  let nombre = document.getElementById("nombre").value; //agarro valor ini del html
  let apellido = document.getElementById("apellido").value; //agarro valor final del html
  let celular = document.getElementById("celular").value; //agarro valor final del html
  let anio = document.getElementById("anio").value; //agarro valor final del html
  
  var persona = {
    dni,
    nombre,
    apellido,
    celular,
    anio
  };
  cont++;
  document.getElementById("cantRegistrados").innerHTML =
    "Cantidad de registrados " + cont;
  muestraDato(persona);
}

function muestraDato(persona) {
  const fragment = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.textContent = `DNI=> ${persona.dni} Nombre=> ${persona.nombre} Apellido=>${persona.apellido}
  Celular=>${persona.celular} Año nacimiento=>${persona.anio}`;
  fragment.appendChild(divElement);
  document.body.appendChild(fragment);
}
