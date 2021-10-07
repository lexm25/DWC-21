//definimos variables a utilizar
var estatura=0;
var peso=0;
var edad =0;
var imc = 0;
var respuesta = "";
//bucle para controlar el programa
while(true){
    //pedimos la estatura, el peso y la edad, controlando que no introduzca datos negativos
    estatura = parseInt(prompt("Introduzca su estatura en centímetros: ", estatura));
        if (estatura < 0) {
            alert("No puede introducir datos negativos");
            continue;
        }
    peso = parseFloat(prompt("Introduzca su peso en kg: ", peso));
        if (peso < 0) {
            alert("No puede introducir datos negativos");
            continue;
        }
    edad = parseInt(prompt("Introduzca su edad en años: ", edad));
        if (edad < 0) {
            alert("No puede introducir datos negativos");
            continue;
        }
    //metemos en imc el cálculo del porcentaje y se controla su riesgo, enseñando por pantalla
    imc = peso / (Math.pow(estatura,2));
    if(edad<45 && imc<22.0){
        document.write("Su imc es: ",imc," usted se encuentra en riesgo bajo");
    }
    else if(edad<45 && imc>=22.0){
        document.write("Su imc es: ",imc," usted se encuentra en riesgo medio");
    }
    else if(edad >=45 && imc<22.0){
        document.write("Su imc es: ",imc," usted se encuentra en riesgo medio");
    }
    else{
        document.write("Su imc es: ",imc," usted se encuentra en riesgo alto");
    }
    prompt("¿Quiere realizar otro cálculo? 'si' para seguir, 'no' para salir", respuesta);
    if(respuesta=="no"){
        break;
    }
}