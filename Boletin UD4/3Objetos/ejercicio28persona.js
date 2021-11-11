/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. el objeto Persona)*/
class Persona {
    constructor (nombre,apellido,dni,fecha) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha = fecha;
    }
    imprimeDatos(){
       document.write("Nombre: " + this.nombre + " Apellido: " + this.apellido + " DNI: " + this.dni + " Fecha Nacimiento: " + this.fecha);
    }
}
