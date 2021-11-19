var sesionCalificacion = [];

var piloto1 = new Piloto("Fernando Alonso","Alpine Motors");
var piloto2 = new Piloto("Max Verstappen","Redbull Racing");
var piloto3 = new Piloto("Carlos Sainz","Scuderia Ferrari");

sesionCalificacion.push([piloto1,0.14]);
sesionCalificacion.push([piloto2,0.17]);
sesionCalificacion.push([piloto3,0.19]);

// sesionCalificacion.sort();
// console.log(sesionCalificacion);
sesionCalificacion.sort(function(a, b){return b - a});
console.log(sesionCalificacion);

function anadirPiloto(sesionCalificacion,piloto,tiempo) {
    sesionCalificacion.push(piloto,tiempo);
}

