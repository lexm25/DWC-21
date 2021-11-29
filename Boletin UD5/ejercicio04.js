window.onload = inicializar;

function inicializar() {
    var elementos=document.forms[0];
    for (let i = 0; i < elementos.elements.length; i++) {
        elementos.elements[i].addEventListener('click',corregir,false);
        
    }
}

function corregir(e) {
    if (e.currentTarget.name=="fav_language") {
        divP1 = document.getElementById("p1");
        if (e.currentTarget.value.toUpperCase()=="JAVASCRIPT") {
            divP1.innerHTML="Respuesta Correcta";
        }else{
            divP1.innerHTML="Respuesta Incorrecta. Correcta es :milú."
        }
    }else if (e.currentTarget.name=='age') {
        divP2=document.getElementById("p2");
        if (e.currentTarget.value=="25") {
            divP2.innerHTML="Respuesta Correcta"
        }else{
            divP2.innerHTML = "Respuesta incorrecta. Correcta es blanco"
        }
    }
}