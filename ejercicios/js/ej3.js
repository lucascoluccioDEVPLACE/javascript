var arregloDatos=new Array;
var cont=0;
function guardaDatos() {
  let nombre = document.getElementById("nombre").value; //agarro valor ini del html
  let apellido = document.getElementById("apellido").value; //agarro valor final del html
  let celular = document.getElementById("celular").value; //agarro valor final del html
  arregloDatos.push(nombre+" "+apellido+" "+celular);
  cont++;
  if (cont==3){
    document.getElementById("guardar").setAttribute("disabled", "disabled");
    muestraDatos();
    }
}

function muestraDatos(){
  for (let i=0;i<arregloDatos.length;i++){
    document.getElementById("contador").innerHTML = document.getElementById("contador").innerHTML +
    arregloDatos[i]+"<p>"
}
}