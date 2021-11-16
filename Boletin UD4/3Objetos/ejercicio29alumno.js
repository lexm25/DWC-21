/*Crear un objeto Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos).*/
class Alumno extends Persona{
    constructor(nombre,apellido,dni,fecha,curso,notas){
        super(nombre,apellido,dni,fecha);
        this.curso = curso;
        this.notas = notas;
    }
    imprime(){
        // this.imprimeDatos();
        super.imprime(); 
        document.write(" Curso: " + this.curso) 
        document.write("<br>");
        for (const [clave,valor] of this.notas) {
            document.write("Nota del módulo " + clave + ": " + valor + "<br>");    
        }
    }
    
    notaMedia(){
        var media = 0;
        var valores = this.notas.values();
        for (let o of valores) {
            media += o;
        }
        media = media/this.notas.size;
        return media.toFixed(2);
    }

    mejorNota(){
        const mejorNota = new Map();
        var valores = this.notas.values();
        var mayorNota = Math.max(...valores);
        for (let [clave,valor] of this.notas) {
            if(valor == mayorNota){
                mejorNota.set(clave,valor);
            }
        }
        return mejorNota;
    }
}