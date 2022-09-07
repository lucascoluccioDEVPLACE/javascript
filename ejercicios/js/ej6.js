
var cont = 0;
const max=2;
var arregloPerros = new Array();

class Perro {
    constructor(nombre,anio,color,raza,estado){ 
    this.nombre=nombre;
    this.anio=anio;
    this.color=color;
    this.raza=raza;
    this.estado=estado;
}
    getEdad(){
    return this.anio;
    }
    getNombre(){
      return this.nombre;
    }
    getColor(){
      return this.color;
    }
    getRaza(){
      return this.raza;
    }
    getEstado(){
      return this.estado;
    }
    modificaEstado(estadoNuevo){
      this.estado=estadoNuevo;
    }
    informaEstado(){
      return "El estado actual del perro "+ this.nombre+ " es "+this.estado;
    }
}

function guardaDatos() {
  let nombre = document.getElementById("nombre").value; 
  let edad = document.getElementById("edad").value;
  let color = document.getElementById("color").value; 
  let estado = document.getElementById("estado").value; 
  let raza = document.getElementById("raza").value;
  let perro=new Perro(nombre,edad,color,estado,raza);
  arregloPerros.push(perro);
  cont++;
  if (cont===max){
    document.getElementById("guardar").setAttribute("disabled", "disabled");
    muestraDatos();
    document.getElementById("modificaEstado").disabled = false;
  }
}
function muestraDatos() {
  for (let i = 0; i < arregloPerros.length; i++) {
    document.getElementById("perros").innerHTML=
    document.getElementById("perros").innerHTML + arregloPerros[i].getNombre()+" "+arregloPerros[i].getEdad()+" "+
    arregloPerros[i].getColor()+" "+arregloPerros[i].getEstado()+" "+arregloPerros[i].getRaza()+"<p>";
  }
  
}

function actualizaEstado(){
  let nombrePerro = window.prompt("Ingrese nombre del perro para avanzar en su estado");
  let estado=parseInt(window.prompt("Ingrese nuevo estado de perro [2: En proceso de adopcion] [3: Adoptado]"))
  let i=0;
  while (i<arregloPerros.length && !(arregloPerros[i].getNombre()===nombrePerro)){
    i++;
  }
  if (i===arregloPerros.length){
    window.alert("No existe tal perro");
  }
  else if (estado===2 || estado===3){
    if (estado===2)
    estado="En proceso de adopcion";
  else if (estado===3)
    estado="Adoptado";
  arregloPerros[i].modificaEstado(estado); document.getElementById("perros").innerHTML=
  document.getElementById("perros").innerHTML + arregloPerros[i].informaEstado()+"<p>";
    }
  else{
    window.alert("El estado no existe");
  }
}