$(document).ready(function(){
  $(".cuadrado").click(function(){
    $("div").animate({right: 250});
    $("div").animate({width: 150});
    $("div").animate({height: 150});
  });
});