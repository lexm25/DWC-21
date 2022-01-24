//inicializamos el registrador de eventos a la función iniciar
window.addEventListener("load",iniciar)

function iniciar(){
    var h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("click",mostrar);
}

function cuerpo() {
    //definimos el array con los datos
    var arrayJuguetes = [{img:"https://juguettos.com/1361787-large_default/A0041951.jpg", precio:"14,99", href:"https://juguettos.com/1039-la-banda", ref:"A0041951", title:"La Banda Tambor Acústico", coleccion:"La Banda"},{img:"https://juguettos.com/1362350-large_default/A0133071.jpg", precio:"21,99", href:"https://juguettos.com/1039-la-banda", ref:"A0051216", title:"La Banda Guitarra Española", coleccion:"La Banda"}];

    //creamos la estructura de listas
    var div = document.createElement("div");
    var ul = document.createElement("ul");
    ul.setAttribute("style","list-style-type:none;");
    div.appendChild(ul);

    //creamos el bucle con el li y sus componentes
    for (let i = 0; i < arrayJuguetes.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        
        var div2 = document.createElement("div");
        div.setAttribute("class","left-block");
        
        var img = document.createElement("img");
        img.setAttribute("src",arrayJuguetes[i]["img"]);
        img.setAttribute("title",arrayJuguetes[i]["title"]);

        img.addEventListener('click', ocultarMostrar);
        
        var div3 = document.createElement("div");
        div3.setAttribute("class","desc");
        div3.setAttribute("style","display:none");

        var div4 = document.createElement("div");
        div4.setAttribute("class","contet_price");
        var precio = document.createTextNode((arrayJuguetes[i]["precio"] + "€"));
        div4.appendChild(precio);
        div3.appendChild(div4);

        var enlace = document.createElement("a");
        enlace.setAttribute("href",arrayJuguetes[i]["href"]);
        var coleccion = document.createTextNode((arrayJuguetes[i]["coleccion"]));
        enlace.appendChild(coleccion);
        div3.appendChild(enlace);

        var p = document.createElement("p");
        p.setAttribute("class","product-desc");
        var ref = document.createTextNode(arrayJuguetes[i]["ref"]);
        p.appendChild(ref);

        div3.appendChild(p);

        div2.appendChild(img);
        li.appendChild(div2);
        li.appendChild(div3);

        //añadimos el div principal a el body
        document.body.appendChild(div);
    }
}

//definimos la función para mostrar/ocultar
function ocultarMostrar(e){
    if (e.currentTarget.parentNode.nextSibling.style.display=="none") {
        e.currentTarget.parentNode.nextSibling.style.display="";
    } else{
        e.currentTarget.parentNode.nextSibling.style.display="none";
    }
} 
function mostrar() {
    if (document.getElementsByTagName('div')[0]!=null) {
        document.getElementsByTagName('div')[0].remove();
        document.getElementsByTagName('h1')[0].firstChild.nodeValue = "MOSTRAR JUGUETES";
    }
    else{
        cuerpo();
        document.getElementsByTagName('h1')[0].firstChild.nodeValue = "OCULTAR JUGUETES";
    }
}