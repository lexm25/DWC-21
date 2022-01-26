$(document).ready(function(){
  $(".boton").click(function(){
    $("div").animate({left: "+=100px"});
    if($("div").text()!=""){
      $(".cuadrado").css("font-size","30px");
    }
  });
});