var arregloDatos = new Array();
var cont = 0;
function guardaDatos() {
  let nombre = document.getElementById("nombre").value; //agarro valor ini del html
  let apellido = document.getElementById("apellido").value; //agarro valor final del html
  let celular = document.getElementById("celular").value; //agarro valor final del html
  let anio = document.getElementById("anio").value; //agarro valor final del html

  const userPersonalData = {
    name : nombre,
    lastname : apellido,
    tel : celular,
    year : anio
};
  arregloDatos.push(userPersonalData);
  cont++;
  if (cont === 10) {
    document.getElementById("guardar").setAttribute("disabled", "disabled");
    muestraDatos();
  }
}

function muestraDatos() {
  arregloDatos.sort((a,b)=>b.year-a.year);
  for (let i = 0; i < arregloDatos.length; i++) {
    document.getElementById("contador").innerHTML=
      document.getElementById("contador").innerHTML + arregloDatos[i].name+" "+arregloDatos[i].lastname+" "+
      arregloDatos[i].tel+" "+arregloDatos[i].year+"<p>";
  }
}
