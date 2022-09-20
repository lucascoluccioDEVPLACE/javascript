var cont = 0;
var DNI = [];
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
  if (validaDNI(dni)) {
    alert("DNI YA EXISTE");
  } else {
    DNI.push(dni);
    localStorage.setItem("dni", JSON.stringify(DNI));
    cont++;
    document.getElementById("cantRegistrados").innerHTML =
      "Cantidad de registrados " + cont;
    muestraDato(persona);
  }
}

function muestraDato(persona) {
  const fragment = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.textContent = `DNI=> ${persona.dni} Nombre=> ${persona.nombre} Apellido=>${persona.apellido}
  Celular=>${persona.celular} Año nacimiento=>${persona.anio}`;
  fragment.appendChild(divElement);
  document.body.appendChild(fragment);
}

function validaDNI(inputDNI) {
  if (DNI.indexOf(inputDNI) === -1) return false;
  else return true;
}
