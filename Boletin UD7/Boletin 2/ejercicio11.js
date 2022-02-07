$(function () {
    $("#button").click(function () {
        $.post("ejercicio11.php", $("form").serialize());
    });
});