//permite mostrar msj al copiar
function copiar(){
  document.getElementById("textCopy").innerHTML="Elemento copiado";
}
//Agrega evento para escuchar
//document.getElementById("copy2").addEventListener("copy",copiar);


function cortar(){
  document.getElementById("textCopy").innerHTML="Elemento cortado";
}

function allowDrop(event){
  event.preventDefault(); //hace que la informacion no se envie
}
function drapStart(event){
  event.dataTransfer.setData("Text",event.target.id);
}

function drop(event){
  event.preventDefault();
  var data=event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}


function changeColor(){
  document.getElementById("copy").style.backgroundColor="red";
}
document.getElementById("copy").addEventListener("focus",changeColor);