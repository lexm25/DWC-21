class CitaPrevia{
    constructor(fechaHora,paciente,medico){
        this.fechaHora = fechaHora;
        this.paciente = paciente;
        this.medico = medico;
    }

    imprimirCitaPrevia(){
        document.write("El paciente " + this.paciente.nombre + " tiene cita con el médico: " + this.medico.nombre + " con fecha: " + this.fechaHora);
    }
}