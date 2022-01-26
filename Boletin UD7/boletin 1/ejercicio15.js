$(document).ready(function(){
  $(".cuadrado").click(function(){
    $("div").animate({left: "250px"});
    $("div").animate({width: "150px"});
    $("div").animate({height: "150px"});
  });
});