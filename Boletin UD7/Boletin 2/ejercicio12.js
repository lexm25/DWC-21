$(function () {
    $.ajax({
        url: 'ejercicio12.php',
        type: 'post',
        success: function (result) {
            var json = JSON.parse(result);
            var json = JSON.parse(result)
            $("body").html("<div id='todos-los-viajes'> <h1>Subtituloo</h1> </div>");
            var ul = $("<ul>");
            $("body").append(ul);
            for (let i = 0; i < json.length; i++) {
                var li = $("<li>");
                var img = $("<img>", { "src": json[i].src, "width": "100px" })
                ul.append(li);
                li.append(img);

                var p = $("<p>");
                p.text(json[i].desc);
                li.append(p);

                var ul2 = $("<ul>", { "class": "specs" });
                li.append(ul2);

                for (let z = 0; z < json[i].specs.length; z++) {
                    var li2 = $("<li>");
                    ul2.append(li2);

                    li2.text(json[i].specs[z]);
                }
            }
        }
    });
});