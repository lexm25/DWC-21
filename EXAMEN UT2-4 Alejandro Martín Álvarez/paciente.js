class Paciente extends Persona{
    constructor(nombre,apellido,dni,numAfiliacion,mutualista){
        super(nombre,apellido,dni);
        this.numAfiliacion = numAfiliacion;
        this.mutualista = mutualista;
    }

    imprimePaciente(){
        document.write("El paciente ");
        this.imprime;
        if(this.mutualista){
            document.write("con número de afiliación " + this.numAfiliacion + " es mutualista");
        }
        else{
            ocument.write("con número de afiliación " + this.numAfiliacion + " no es mutualista");
        }
    }
}