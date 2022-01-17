window.addEventListener("load",iniciar);



var datos = [{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
             {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]}];

console.log(datos);

function iniciar() {
    var div = document.createElement('div');
    div.setAttribute("src","todos-los-viajes");

    var h1 = document.createElement('h1');
    div.appendChild(h1);
    var ul = document.createElement('ul');
    for (let i = 0; i < datos.length; i++) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute('src',datos[i]["src"]);
        li.appendChild(img);
        var p = document.createElement('p');
        var txt = document.createTextNode(datos[i]["desc"]);
        p.appendChild(txt);
        li.appendChild(p);
        
        var ul2 = document.createElement('ul');
        ul2.setAttribute("class","specs");
    }
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    document.body.appendChild(div);
}