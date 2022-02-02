$(function () {
    $("#button").click(function () {
        var parametros = $('form').serialize();
        $.post({
                data: parametros,
                url: 'ejercicio11.php',

        });
    });
});