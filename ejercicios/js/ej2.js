var tope = 10;
var cont = 0;

function tablaMatematica() {
  let inicial = document.getElementById("inicial").value; //agarro valor ini del html
  let final = document.getElementById("final").value; //agarro valor final del html

  document.getElementById("contador").innerHTML = "";
  if (inicial > final) { //consulto si el valor inicial es mas grande que el final
    document.getElementById("contador").innerHTML = //si es mas grande, entonces msj de error de que es mas grande
      "El inicial es mas grande que el final";
  }
  for (let i = inicial; i <= final; i++) {
    let j = 1;
    document.getElementById("contador").innerHTML =
      document.getElementById("contador").innerHTML + "Tabla del: " + i +"<p>";
    while(j<=10) {
      document.getElementById("contador").innerHTML = document.getElementById("contador").innerHTML + i+"x"+j+"="+i*j+"<p>";
      j++;
    }
  }
}

function contar() { //era un ejercicio que hicimos en primera instancia
  cont++;
  if (cont <= tope) {
    document.getElementById("contador").innerHTML = cont;
  } else {
    document.getElementById("contar").setAttribute("disabled", "disabled");
  }
}