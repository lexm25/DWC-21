class Banda{
    constructor(nombre,anyoFormacion,listado,telefono,estilo){
        this.nombre = nombre;
        this.anyoFormacion = anyoFormacion;
        this.listado = listado;
        this.telefono = telefono;
        this.estilo = estilo;
    }

    mostrarBanda(){
        document.write("La banda " + this.nombre + " de estilo " + this.estilo + " fue formada en el año " + this.anyoFormacion + ".<br> Está formada por: ");
        this.mostrarIntegrantes();
        document.write(" <br>Su teléfono de contacto es: " + this.telefono + "<br>");
               
    }

    mostrarIntegrantes(){
        var contador = 0;
        for (let valor of this.listado) {
            if(contador>= this.listado.length-1){
                document.write("<br>"+valor[0] + " " + valor[1] + " con DNI: " + valor[2]);
            }
            else{
                document.write("<br>"+valor[0] + " " + valor[1] + " con DNI: " + valor[2] + ", ");
            }
            contador++;
        }
    }
}