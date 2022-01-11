window.addEventListener("load",iniciar);

function iniciar() {
    var contenido = document.getElementsByTagName("LI")[0];
    var para = document.createElement('p');
    para.appendChild(contenido);
    document.body.appendChild(para);
}