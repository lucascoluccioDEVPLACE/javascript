const addP = document.createElement("p");
const textoP = document.createTextNode("Ejemplo de texto creado js");
addP.appendChild(textoP);
const element = document.getElementById("ejemplo");
element.appendChild(addP);

const elementP1 = document.getElementById("p1");
const elementP2 = document.getElementById("p2");

element.insertBefore(addP, elementP1);

//element.removeChild(elementP2);

const addImage = document.createElement("img");
addImage.src =
  "https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2021/05/Mario-Bros-png-transparente.png?ssl=1";

element.appendChild(addImage);

const addImage2 = addImage.cloneNode();
addImage2.id = "imagen";
addImage2.className = "imagen";

element.appendChild(addImage2);

const textP1 = elementP1.hasAttribute("data-text12"); //verifica si existe un atributo
//alert(textP1);

//getAttribute devuelve el contenido del atributo a buscar
elementP1.setAttribute("data-ids", "1222");

elementP1.removeAttribute("data-text");

const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const divElement = document.createElement("div");
  divElement.textContent = `Item=> ${i}`;
  fragment.appendChild(divElement);
}
document.body.appendChild(fragment);

addP.innerHTML = "<b>HOLA</b>";
addP.textContent = "<b>HOLA EJEMPLO TEXT CONTENT</b>";

console.log(elementP1.textContent);
console.log(elementP1.innerHTML);
console.log(elementP1.outerHTML);
