window.addEventListener("load",iniciar);

function iniciar() {
    cuerpo();
}

function cuerpo(){
    arrayJSON = [{titular: "Noticia 1", contenido: "Contenido de la noticia 1",descripcion: "Esta es la noticia 1"},
                {titular: "Noticia 2",contenido: "Contenido de la noticia 2",descripcion:"Esta es la noticia 2"},
                {titular: "Noticia 3",contenido: "Contenido de la noticia3",descripcion: "Esta es la noticia 3"}];
                
    for (let i = 0; i <= arrayJSON.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id","noticia"+(i+1));

        var h1 = document.createElement("h1");
        var titular = document.createTextNode(arrayJSON[i]["titular"]);
        h1.appendChild(titular);
        div.appendChild(h1);
        
        var mostrar = document.createElement("img");
        mostrar.setAttribute("src","./imagenes/mostrar.png");
        mostrar.setAttribute("name","mostrar");
        mostrar.addEventListener("click",mostrarContenido);
        div.appendChild(mostrar);
        var ocultar = document.createElement("img");
        ocultar.setAttribute("src","./imagenes/ocultar.png");
        ocultar.setAttribute("name","ocultar");
        ocultar.addEventListener("click",ocultarContenido);
        div.appendChild(ocultar);
        
        var p = document.createElement("p");
        p.setAttribute("id","p"+(i+1));
        p.setAttribute("style","display:block");
        var contenido = document.createTextNode(arrayJSON[i]["contenido"]);
        p.appendChild(contenido);
        p.addEventListener("auxclick",mostrarDescripcion);
        div.appendChild(p);

        var h4 = document.createElement("h4");
        h4.setAttribute("style","display:none");
        var descripcion = document.createTextNode(arrayJSON[i]["descripcion"]);
        h4.appendChild(descripcion);
        div.appendChild(h4);
        
        document.body.appendChild(div);
    }
    
}

function mostrarContenido(e) {
    var contenido = e.currentTarget.nextSibling.nextSibling;
    if(!contenido.style.display=="block"){
        contenido.style.display="block";
    }
}

function ocultarContenido(e) {
    var contenido = e.currentTarget.nextSibling;
    if(contenido.style.display=="block"){
        contenido.style.display="none";
    }   
}

function mostrarDescripcion(e) {
    var descripcion = e.currentTarget.nextSibling;
    if(descripcion.style.display=="none"){
        descripcion.style.display="";
    }
}