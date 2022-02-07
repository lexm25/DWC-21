$(function () {
    $.ajax({
        url: 'viajes.php',
        type: 'post',
        success: function (result) {
            var json = JSON.parse(result);
            $("body").html("<div id='todos-los-viajes'><h1>Viajes Guía Incluido</h1>");
            var ul = $("<ul>");
            $("#todos-los-viajes").append(ul);
            for (let i = 0; i < json.length; i++) {
                var li = $("<li>", { "class": json[i].clase_pais});
                
                var h2 = $("<h2>");
                h2.text(json[i].ciudad_h2);
                li.append(h2);

                var span1 = $("<span>", { "class": "detalle"});
                span1.text(json[i].detalle_precio_total + " por " + json[i].detalle_num_noches + " noches");
                li.append(span1);
                var span2 = $("<span>", { "class": "por-noche"});
                span2.text(json[i].precio_noche)
                var span3 =$("<span>", { "class": "precio"});
                span3.text("/noche");
                span2.append(span3);
                li.append(span2);

                var button = $("<button>", { "class": "reserva"});
                button.text("Resérvalo Ya!");
                li.append(button);

                var ul2 = $("<ul>", { "class": "fotos"});
                var li2 = $("<li>");
                var img = $("<img>", { "src": json[i].ruta_imagen});
                li2.append(img);
                var span4 = $("<span>");
                li2.append(span4);
                ul2.append(li2);
                li.append(ul2);
                span4.text(json[i].pie_imagen);
                ul.append(li);
            }

            $(".fotos").hover(function(){
                $(".por-noche").addClass("destacado")
                $(".por-noche").removeClass("por-noche")},
                function(){
                $(".destacado").addClass("por-noche")
                $(".destacado").removeClass("destacado");
            });

            $("img").click(function(){
                $(this).nextAll().toggle();
            });

            

            
        }
    });
});