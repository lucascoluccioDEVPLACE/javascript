var cont = 0;

function guardaDatos() {
  let nombre = document.getElementById("nombre").value; //agarro valor ini del html
  let apellido = document.getElementById("apellido").value; //agarro valor final del html
  let celular = document.getElementById("celular").value; //agarro valor final del html
  let anio = document.getElementById("anio").value; //agarro valor final del html
  let precio = document.getElementById("precio").value; //agarro valor final del html
  var persona = {
    nombre,
    apellido,
    celular,
    anio,
    precio
  };
  cont++;
  document.getElementById("cantRegistrados").innerHTML =
    "Cantidad de registrados " + cont;
  muestraDato(persona);
}

function muestraDato(persona) {
  const fragment = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.textContent = `Nombre=> ${persona.nombre} Apellido=>${persona.apellido}
  Celular=>${persona.celular} Año nacimiento=>${persona.anio}`;
  fragment.appendChild(divElement);
  document.body.appendChild(fragment);
}
