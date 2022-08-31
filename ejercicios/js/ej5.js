var arregloDatos = new Array();
var cont = 0;

function guardaDatos() {
  let nombre = document.getElementById("nombre").value; //agarro valor ini del html
  let apellido = document.getElementById("apellido").value; //agarro valor final del html
  let celular = document.getElementById("celular").value; //agarro valor final del html
  let anio = document.getElementById("anio").value; //agarro valor final del html
  let precio = document.getElementById("precio").value; //agarro valor final del html
  var persona={
    nombre,
    apellido,
    celular,
    anio,
    precio,
  };
  arregloDatos.push(persona);
  console.log(arregloDatos);
  cont++;
  if (cont === 3) {
    document.getElementById("guardar").setAttribute("disabled", "disabled");
    muestraDatos();
  }
}

function muestraDatos() {
  arregloDatos.sort((a,b)=>b.anio-a.anio);
  for (let i = 0; i < arregloDatos.length; i++) {
    document.getElementById("personas").innerHTML=
    document.getElementById("personas").innerHTML + arregloDatos[i].nombre+" "+arregloDatos[i].apellido+" "+
    arregloDatos[i].celular+" "+arregloDatos[i].anio+" "+arregloDatos[i].precio+"<p>";
    
  }
  let total = arregloDatos.reduce((acumulador, dato) => acumulador + parseInt(dato.precio), 0);
  document.getElementById("total").innerHTML=
      document.getElementById("total").innerHTML+"El total es: "+total+"<br>";

}