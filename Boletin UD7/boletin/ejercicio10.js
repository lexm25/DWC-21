$(document).ready(function(){
    $("input").focus(function(){
        $(".primero").css("background-color", "lightblue");
        $(".segundo").css("background-color", "lightgreen");
        $("input").blur(function(){
            $(".primero").css("background-color", "lightgray");
            $(".segundo").css("background-color", "lightgray");
        });
    });
    
});