/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.*/
class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;
    };
    cuadrante(){
        if(this.x>0 && this.y > 0){
            document.write("Primer cuadrante");
        }
        else if(this.x>0 && this.y < 0){
            document.write("Cuarto cuadrante");
        }
        else if(this.x<0 && this.y > 0){
            document.write("Segundo cuadrante");
        }
        else if(this.x<0 && this.y < 0){
            document.write("Tercer cuadrante");
        }
        else if(this.x == 0 && this.y == 0){
            document.write("Centro");
        }
    }
};

let p = new Punto(-1,2);
p.cuadrante();