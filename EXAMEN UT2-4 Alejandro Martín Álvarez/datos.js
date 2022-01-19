var fecha1 = new Date("December 17, 2021 16:24:00");
var fecha2 = new Date("January 2, 2022 13:45:00");

var paciente1 = new Paciente("José Antonio","Martín","654373254G",16547237, true);
var paciente2 = new Paciente("Miguel","Fernández","32447675X",67654327, false);

var medico1 = new Medico("Ramón","Pérez","63234714F",564523);
var medico2 = new Medico("Francisco","Díaz","321423432H",52398);

var citaPrevia1 = new CitaPrevia(fecha1,paciente1,medico1);
var citaPrevia2 = new CitaPrevia(fecha2,paciente2,medico2);


var arrayCitaPrevia = [citaPrevia2,citaPrevia1];
console.log(arrayCitaPrevia);

var fecha3 = new Date("February 15, 2025 10:04:00");
var paciente3= new Paciente("Pepe","Roldán","125131D",63452354, false);
var medico3 = new Medico("Rubén","Cordobés","3657232J",3244477);

function introduceCita(arrayCitaPrevia,fecha,paciente,medico){
    var index = arrayCitaPrevia.findIndex((cita) => cita.paciente.nombre == paciente.nombre);
    
    if(index != -1){
        document.write("El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra");
    }
    else{
        arrayCitaPrevia.push([fecha,paciente,medico]);
    }
}

function eliminarCita(arrayCitaPrevia,dni){
    arrayCitaPrevia = arrayCitaPrevia.filter((cita) => {
        return cita.dni !== dni;
    });
}

function buscarCita (arrayCitaPrevia,dni) {
    return arrayCitaPrevia.find((cita) => cita.paciente.dni == dni);
}

function mostrarCitas(arrayCitaPrevia){
    for (let cita of arrayCitaPrevia) {
        cita.imprimirCitaPrevia();
        document.write("<br>");
    }
}

function ordenaCitasPorFechaHora(arrayCitaPrevia){
    return arrayCitaPrevia.sort(function (a,b) {
        if (a.fechaHora.getTime() > b.fechaHora.getTime()) {
          return 1;
        } else if (a.fechaHora.getTime() < b.fechaHora.getTime()) {
          return -1;
        } 
        return 0;
      });
}

function listadoMutualistas(arrayCitaPrevia){
    for (let cita of arrayCitaPrevia) {
        if(cita.paciente.mutualista == true){
            cita.paciente.imprimePaciente();
        }
    }
}

// introduceCita(arrayCitaPrevia,fecha3,paciente3,medico3);
// console.log(arrayCitaPrevia);

// eliminarCita(arrayCitaPrevia,"32447675X");
// console.log(arrayCitaPrevia);

// buscarCita(arrayCitaPrevia,"654373254G");
// console.log(arrayCitaPrevia);

// console.log(arrayCitaPrevia);
// ordenaCitasPorFechaHora(arrayCitaPrevia);
// console.log(arrayCitaPrevia);

// mostrarCitas(arrayCitaPrevia);

// listadoMutualistas(arrayCitaPrevia);

