    window.addEventListener("load",recogerDatos);
        
    function recogerDatos(){
        document.getElementById("crear-ventana").addEventListener("click",crearNueva);
    }
    function calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }

    function addEdad() {
        var date = document.forms["formulario"].fecha.value;
        document.forms["formulario"].edad.value = calcularEdad(date);
    }

    function crearNueva(){
        var nombre = (document.forms["formulario"].nombre.value).toUpperCase();
        var apellidos = (document.forms["formulario"].apellidos.value).toUpperCase();
        var email = (document.forms["formulario"].email.value).toUpperCase();
        var password1 = (document.forms["formulario"].password1.value).toUpperCase();
        var password2 = (document.forms["formulario"].password2.value).toUpperCase();
        var fecha = (document.forms["formulario"].fecha.value).toUpperCase();

        if(password1 != password2){

        }else{
            nuevaVentana = window.open("","","height=400,width=800");
            nuevaVentana.document.write("Nombre: " + nombre + "<br>");
            nuevaVentana.document.write("Apellidos: " + apellidos + "<br>");
            nuevaVentana.document.write("E-mail: " + email + "<br>");
            nuevaVentana.document.write("Fecha: " + fecha + "<br>");
        }
    }
        