$(function () {
    $("#button").click(function () {
            var valorCaja1 = $("#nombre").val();
            var valorCaja2 = $("#edad").val();
            var parametros = {
                    "valorCaja1": valorCaja1,
                    "valorCaja2": valorCaja2
            };
            $.ajax({
                    data: parametros,
                    url: 'ejercicio10.php',
                    type: 'post',

            });
    });
});