var cont=5;

let palabra=new Array();
let letrasErroneas=new Array();
let letrasUsadas=new Array();
let intento=new Array();
var faltante=palabra.length;

function guardaPalabra(){
  palabra=document.getElementById("inputPalabra").value;
  document.getElementById("intentos").innerHTML=cont;
  document.getElementById("cantidadLetras").innerHTML=palabra.length;
  intento[0]=palabra[0];
  document.getElementById("palabra").innerHTML=intento[0];
  faltante=palabra.length-1;
  document.getElementById("cantidadLetrasFaltantes").innerHTML=faltante;
  document.getElementById("inputPalabra").value="";
  document.getElementById("guardarPalabra").setAttribute("disabled", "disabled");
}

function verifica(){
  document.getElementById("msjError").innerHTML="";
  let x=document.getElementById("letra").value;
  if (letrasUsadas.includes(x)){ //primero revisamos si la letra no fue usada ya 
    document.getElementById("msjError").innerHTML="Ya se utilizo esta letra";
  }
  else{ //si no fue utilizada, entonces:
    letrasUsadas.push(x);//agregamos la letra a letras utilizadas
    if (palabra.includes(x)){ //se chequea si existe la letra en nuestra palabra
      for (let i=1;i<palabra.length;i++){
        if (palabra[i]===x){
          intento.splice(i,0,x);
          faltante--;
        }
      }
      document.getElementById("cantidadLetrasFaltantes").innerHTML=faltante; //resto letras faltantes
      document.getElementById("palabra").innerHTML=intento.join(); //muestro resultado
      if (faltante===0){
        document.getElementById("msjError").innerHTML="GANASTE";
        document.getElementById("verificar").setAttribute("disabled", "disabled");
      }
    }
    else{//si la letra no existe en la palabra, error
      letrasErroneas.push(x)//pasamos la letra a letrasErroneas
      document.getElementById("letras").innerHTML=letrasErroneas;//mostramos letras erroneas
      cont--;//restamos un intento
      document.getElementById("intentos").innerHTML=cont;//mostramos intentos
      if (cont===0){
        document.getElementById("verificar").setAttribute("disabled", "disabled");
        document.getElementById("msjError").innerHTML="PERDISTE";
      }
    }
  }
}