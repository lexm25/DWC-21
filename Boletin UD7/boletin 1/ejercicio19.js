$(document).ready(function(){
  $("#boton1").click(function(){
    $("p").append("Texto añadido");
    $("ul").append("<li>hola</li>");
  });
  $("#boton2").click(function(){
    $(":root").append("<button>illo</button>");
  });
});