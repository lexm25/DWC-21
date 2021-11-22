        var nombre = document.getElementById("nombre").value.toUpperCase();
        var apellidos = document.getElementById("apellidos").value.toUpperCase();
        var email = document.getElementById("email").value.toUpperCase();
        var password = document.getElementById("password").value.toUpperCase();
        var fecha = document.getElementById("date").value.toUpperCase();

        function inicializar(){
            document.getElementById("crear-ventana").onclick=crearNueva;
        }

        function crearNueva(){
            nuevaVentana = window.open("","","height=400,width=800");
            nuevaVentana.document.write("Nombre: " + nombre + "<br>");
            nuevaVentana.document.write("Apellidos: " + apellidos + "<br>");
            nuevaVentana.document.write("E-mail: " + email + "<br>");
            nuevaVentana.document.write("Contraseña: " + password + "<br>");
            nuevaVentana.document.write("Fecha: " + fecha + "<br>");
        }