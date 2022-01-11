window.addEventListener("load",iniciar);

function iniciar() {
    var prueba = document.createElement('li');
    var txt = document.createTextNode('Opel');
    prueba.appendChild(txt);
    var para = document.createElement('p');
    para.appendChild(prueba);
    document.body.appendChild(para);
    document.getElementsByTagName('ul').appendChild(prueba);

}