/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/
var p1 = new Punto(1,0);
var p2 = new Punto(4,2);

var rectangulo = new Rectangulo(p1,p2);

document.write("El perímetro del rectángulo es " + rectangulo.perimetro() + " y su área " + rectangulo.area());