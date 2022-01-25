$(document).ready(function () {
    // $('ul:first').css({"color":"green"});
    $('ul').first().css({"color":"green"});
    $('li').eq(2).css({"background":"lightgray"});
    $("[href]").css({"background":"red"});
    $(!"[href]").css({"background":"lightblue"});
});