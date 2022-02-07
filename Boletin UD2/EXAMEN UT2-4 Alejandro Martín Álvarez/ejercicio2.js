var nombre = "";
let expReg = /\w{7}/;
let expRegNum = /[0-9]/;
condition = true;
contadorNumeros = 0;
do {
    nombre = prompt("Introduzca el nombre de usuario que contenga 7 carácteres");
        if(expReg.test(nombre)){
            condition = false;
            ventana = window.open("","","resizable,scrollbars,height=200,width=400,bottom-right");
            ventana.document.write("Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!");
            window.moveTo(300, 200);
            setTimeout(cerrar,5000);
            function cerrar(){
                ventana.close();
            }
        }
        else{
            alert("El nombre introducido no es válido");
            condition = true;
        }
} while (condition);

for (let i = 0; i <= nombre.length; i++) {
    if (expRegNum.test((nombre.charAt[i]))) {
        contadorNumeros++;
    }
}

// if(contadorNumeros<=0){
//     document.write("No se mostrará pop up ya que no hay dígitos en el nombre")
// }
// else{
    // for (let index = 0; index < contadorNumeros; index++) {
        
//     }
// }
