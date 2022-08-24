let inicial=prompt("Ingrese Valor inicial");
let final=prompt("Ingrese Valor final");

tablaMultiplica(inicial,final);

function tablaMultiplica(inicial,final){
    if (inicial > final) 
        console.error("El valor inicial debe ser menor al final");
    for (let i=inicial;i<=final;i++){
        console.log("Tabla para el numero "+i);
        for (let j = 1; j < 11; j++)
            console.log(i + "x" + j + "=" + i*j);
    }
}

