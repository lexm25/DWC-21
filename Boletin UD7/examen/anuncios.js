$(function () {
    $("#buscar").click(function () {
        $.post({
            url: 'ajaxAnuncios.php',
            data: $("#anuncio"),
            success: function (response) {
                response = JSON.parse(response);

                var div = document.createElement("div");
                document.body.appendChild(div);

                var h1= document.createElement("h1");
                var txt1=document.createTextNode("Subtituloo");
                h1.appendChild(txt1);
                div.appendChild(h1);

                var ul = document.createElement("ul");
                div.appendChild(ul);
                

                for(var i=0; i<response.length; i++){
                    var li=document.createElement("li");
                    var img=document.createElement('img');
                    img.setAttribute("src",response[i].href);
                    li.appendChild(img);
            
                    
                    var parr= document.createElement("p");
                    var txt2= document.createTextNode(response[i].precio);
                    parr.appendChild(txt2);
                    li.appendChild(parr);
                    
                    $("img").click(function(){
                        if ( $(this).next("p").attr("class")=="destacado") {
                            $(this).next("p").removeClass("destacado");
                        }else{
                        $(this).next("p").addClass("destacado");}
                        
                    });
                    
                    
                    var ul1 = document.createElement("ul");
                    ul1.setAttribute("class","specs");
                    li.appendChild(ul1);
                    for (let z = 0; z < response[z].imagenes.length; z++) {
                        var specsLi = document.createElement("li");
                        var txt3 = document.createTextNode(response[i].url_primera)
                        specsLi.appendChild(txt3);
                        ul1.appendChild(specsLi);
                    }
            
                    ul.appendChild(li);
                }
                
                
            }
        });
    });

    
        
});

