/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/

class​ ​ Rectangulo​ { 
    constructor​ (x,y){
    this.x = new Punto(-1,2);
    this.y = new Punto(3,-4);
    };
    perimetro(){
        return (2*this.x) + (2*this.y); 
    }
    area(){
        return​ this.x*this.y;
    };
    base(){

    }
    altura(){

    }
    /*altura = área / base | base = área / altura*/
};

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
    