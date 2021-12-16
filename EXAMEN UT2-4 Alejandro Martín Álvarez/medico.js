class Medico extends Persona{
    constructor(nombre,apellido,dni,numFacultativo){
        super(nombre,apellido,dni);
        this.numFacultativo = numFacultativo;
    }

    imprimeMedico(){
        document.write("El médico Don ");
        this.imprime;
        document.write("Con número facultativo: " + this.numFacultativo);
    }
}