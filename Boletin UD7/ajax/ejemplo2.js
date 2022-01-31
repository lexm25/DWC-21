$(function () {
        $("#button").click(function () {
                $.ajax({
                        url: 'ejemplo2.php',
                        type: 'post',
                        beforeSend: function () {
                                $("#resultado").html("Procesando, espere por favor...");
                        },
                        success: function (response) {
                                var resultado = JSON.parse(response);
                                var sum = resultado[0] + resultado[1];
                                $("#resultado").html(sum);
                        }
                });
        });
});



