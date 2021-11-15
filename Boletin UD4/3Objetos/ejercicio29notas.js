    var notas = new Map();

    notas.set("DWS",5.3);
    notas.set("DWC",3.2);
    notas.set("DIW",3.3212);
    notas.set("DAW",5.6);
    notas.set("EIE",4.3);

    var alumno = new Alumno("Alejandro","Martin","23423g","25-08-2000","2º DAW", notas);

    alumno.imprime();
    document.write("La nota media es: " + alumno.notaMedia() + "<br>");
    var mejoresNotas = alumno.mejorNota();
    for (const [clave,valor] of mejoresNotas) {
        document.write("Las mejores notas son: " + "<br>" + clave + ": " + valor);
    }
