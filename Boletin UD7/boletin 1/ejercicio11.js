$(document).ready(function(){
    $("button").click(function(){
      $(this).next().toggle();
      if($(this).text()=="Hide me"){
        $(this).text("Show me");
      }else{
        $(this).text("Hide me");
      }
    });
  });