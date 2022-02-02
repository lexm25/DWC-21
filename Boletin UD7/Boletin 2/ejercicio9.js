$(function () {
    $("#button").click(function () {
        $.ajax({
            url: 'ejercicio9.php',
            type: 'post',
            success: function (response) {
                var contenido = JSON.parse(response);
                $("#contenido").html(contenido.nombre);
            }
        });
    });
});