$(document).ready(function(){
  $(".cuadrado").click(function(){
    $("div").animate({right: 100});
    $(".cuadrado").css("font-size","100px");
  });
});