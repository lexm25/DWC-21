/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula.
*/
class Aula{
    constructor(alumnos){
        this.alumnos = alumnos;
    }

    buscarAlumno(dni){ 
        for (const a of this.alumnos) {
            if(a.dni == dni){
                return a;
            }
        }
        return false;
    }

    ordenarPorNota(dni){
        var ordenado = (this.buscarAlumno(dni)).nota;
        const mapSort1 = new Map([...ordenado.entries()].sort((a, b) => b[1] - a[1]));
        return mapSort1;
    }

    ordenarPorApellido(){

    }

    imprimeAlumnos(){
        this.alumnos.forEach(element => {
            element.imprime();
        });
    }
}