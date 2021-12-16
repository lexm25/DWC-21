/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. el objeto Persona)*/
class Persona {
    constructor (nombre,apellido,dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    imprime(){
       document.write(this.nombre + " " + this.apellido + " " + this.dni + " ");
    }
}
