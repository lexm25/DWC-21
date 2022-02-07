window.addEventListener("load",iniciar);

function iniciar(){
    cuerpo();
}

function cuerpo() {
    var arrayJSON = [
        {titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
        {titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
        {titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}
    ];

    for (let i = 0; i < arrayJSON.length; i++) {
        var divSerie = document.createElement("div");
            var ul = document.createElement("ul");
            ul.setAttribute("style","list-style-type: none;");

                var li = document.createElement("li");

                    var divDatos = document.createElement("div");
                    divDatos.setAttribute("class","left-block");

                        var parrafoTitulo = document.createElement("p");
                        parrafoTitulo.addEventListener("click",mostrarOcultar);
                        parrafoTitulo.setAttribute("class","titulo");
                        var titulo = document.createTextNode(arrayJSON[i]["titulo"])
                        parrafoTitulo.appendChild(titulo);

                    divDatos.appendChild(parrafoTitulo);

                        var divDesc = document.createElement("div");
                        divDesc.setAttribute("class","desc");
                        divDesc.setAttribute("style","display: block;");

                        divDesc.addEventListener("load",ocultar);
                            var divGenero = document.createElement("div");
                            divGenero.setAttribute("class","content_genre");
                            var b = document.createElement("b");
                            var textoGenero = document.createTextNode("Género:");
                            b.appendChild(textoGenero);
                            divGenero.appendChild(b);
                            var genero = document.createTextNode(arrayJSON[i]["genero"]);
                            divGenero.appendChild(genero);

                            divDesc.appendChild(divGenero);

                            var parrafoSinopsis = document.createElement("p");
                            var b2 = document.createElement("b");
                            var textoSinopsis = document.createTextNode("Sinopsis:");
                            b2.appendChild(textoSinopsis);
                            parrafoSinopsis.appendChild(b2);
                            var sinopsis = document.createTextNode(arrayJSON[i]["sinopsis"]);
                            parrafoSinopsis.appendChild(sinopsis);

                            divDesc.appendChild(parrafoSinopsis);

                            var img = document.createElement("img");
                            img.setAttribute("src",arrayJSON[i]["src"]);
                            img.setAttribute("title",arrayJSON[i]["titulo"]);

                            divDesc.appendChild(img);

        divDatos.appendChild(divDesc);

        li.appendChild(divDatos);

        ul.appendChild(li);

        divSerie.appendChild(ul);

        document.body.appendChild(divSerie);

    }
}

function ocultar(e) {
    if(e.currentTarget.style.display=="block"){
        e.currentTarget.style.display="none";
    }
    
}

function mostrarOcultar(e) {
    if(e.currentTarget.nextSibling.style.display=="block"){
        e.currentTarget.nextSibling.style.display="none";
    }else{
        e.currentTarget.nextSibling.style.display="block";
    }
}

