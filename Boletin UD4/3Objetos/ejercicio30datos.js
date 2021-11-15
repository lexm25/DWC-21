    notas1 = new Map();
    notas2 = new Map();
    
    notas1.set("DWS",5.3);
    notas1.set("DWC",3.2);
    notas1.set("DIW",6.4);
    notas1.set("DAW",8.6);
    notas1.set("EIE",7.7);

    var alumno1 = new Alumno("Alejandro","Martin","23423g","25-08-2000","2º DAW", notas1);

    notas2.set("DWS",5.3);
    notas2.set("DWC", 6.73);
    notas2.set("DIW",3.3212);
    notas2.set("DAW",9.58);
    notas2.set("EIE",4.345);

    var alumno2 = new Alumno("Ruben","Castellano","36847f","10-12-1993","2º DAW", notas2);

    var datos = [alumno1,alumno2];
    var aula = new Aula(datos);

    // aula.imprimeAlumnos();
    // var encontrado = aula.buscarAlumno("23423g");
    // encontrado.imprime();
    console.log(aula.ordenarPorNota(alumno1));