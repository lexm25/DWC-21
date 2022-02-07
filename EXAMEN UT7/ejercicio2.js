$(function(){
    $("#boton").click(function() {
        var valorNombre=$("#nombre").val();
        var valorApellido=$("#apellido").val();

        var parametros = {
            nombre: valorNombre,
            apellido: valorApellido
        };
        $.ajax({
            data: parametros,
            url: 'ejercicio2.php',
            type: 'post' 
        });
    });
});