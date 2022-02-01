$(function () {
    $("#button").click(function () {
        $.ajax({
            url: 'ejemplo2.php',
            type: 'post',
            success: function (response) {
                var contenido = JSON.parse(response);
                $("#contenido").html(contenido);
            }
        });
    });
});