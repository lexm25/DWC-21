$(document).ready(function () {
    //a
    // $("ul:first").css("color","green");
    $("ul").first().css("color","green");
    //b
    $("li").eq(2).css("background","lightgray");
    //c
    $("li").eq(2).next().css("background","red");
    //d
    $("li").eq(2).nextAll().css("background","yellow");
    //e
    $("[href]").css("color","black")
    //f
    $("a:not([href])").css("background","lightblue");
    //g
    $("[href*=mod]").css("font-size", "30px");
    //h
    $("[href^=mod]").css("font-size", "15px");
    //i
    $("[href$='.html']").css("background-color", "blue");
    //j

    //k
    $(":empty").text("nodo vacio");
    //l
    $("li:contains('DWESE')").css("background-color", "red");
    $("li:contains('DAW')").css("background-color", "red");
    $("li:contains('EIE')").css("background-color", "red")
});