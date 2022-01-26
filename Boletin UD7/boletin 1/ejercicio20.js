$(document).ready(function(){
  $("#boton1").click(function(){
    $("#boton1").before("Texto añadido");
    $("li:first").before("<li>hola</li>");
  });
  $("#boton2").click(function(){
    $("#boton1").before("<button>illo</button>");
  });
});