$(document).ready(function(){
  $("li").hover(
    function () {
      $(this).find("span").last().remove();
      $(this).append($("<span style='color:green;'> encima</span>"));
    }, function () {
      $(this).find("span").last().remove();
      $(this).append($("<span style='color:red;'> fuera</span>"));
    }
  );
});