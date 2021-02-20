'use strict'

var bello = prompt("Ingrese cantidad de pasajeros");
var sanjavier = prompt("Ingrese cantidad de pasajeros");
var sabaneta = prompt("Ingrese cantidad de pasajeros");
var stop=confirm("¿Desea saber cuantos pasajeros ingresaron al metro?");

while(stop == false){
    bello++;
    sanjavier++;
    sabaneta++;
    var stop=confirm("¿Deseas detener la ejecución?");
}

if(stop == true){
    alert("En la estación de bello entraron "+bello+" pasajeros");
    alert("En la estación de San Javier entraron "+sanjavier+" pasajeros");
    alert("En la estación de Sabaneta entraron "+sabaneta+" pasajeros");
}