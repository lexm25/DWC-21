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
        return null;
    }

    buscarAlumnov2(dni){ 
        //Coge los elementos que estan dentro de el array de alumnos
        //Cogemos el primer elemento ya que devuelve el objeto alumno
        return this.alumnos.filter((alumno) => alumno.dni == dni)[0];
        
        //la función find te devuelve directamente la primera posicion
        //return this.alumnos.find((alumno) => alumno.dni == dni);
    }

    ordenarPorNota(dni){
        var ordenado = this.buscarAlumno(dni);
        const mapSort1 = new Map([...ordenado.notas.entries()].sort((a, b) => b[1] - a[1]));
        return mapSort1;
    }

    ordenarPorApellido(){
        return this.alumnos.sort((alumno1,alumno2)=>{
            if (alumno1.apellido.toUpperCase()<alumno2.apellido.toUpperCase()){
                return 1;
            } 
            else if (alumno1.apellido.toUpperCase()>alumno2.apellido.toUpperCase()){
                return -1;
            }
            return 0;
        });
    }

    imprimeAlumnos(){
        this.alumnos.forEach(element => {
            element.imprime();
        });
    }
}