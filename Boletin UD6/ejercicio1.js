window.addEventListener("load",iniciar);

function iniciar() {
    var titulo = document.createElement('title');
    var txt1 = document.createTextNode('text');
    titulo.appendChild(txt1);
    document.head.appendChild(titulo);

    var cabecera = document.createElement('h1');
    var txt2 = document.createTextNode('text');
    cabecera.appendChild(txt2);
    document.body.appendChild(cabecera);

    var para = document.createElement('p');
    var txt3 = document.createTextNode('text');  
    para.appendChild(txt3);

    var enlace1 = document.createElement('a'); 
    var txt4 = document.createTextNode('text');
    enlace1.appendChild(txt4);
    para.appendChild(enlace1);

    var txt5 = document.createTextNode('text');  
    para.appendChild(txt5);

    var enlace2 = document.createElement('a'); 
    var txt6 = document.createTextNode('text');
    enlace2.appendChild(txt6);
    para.appendChild(enlace2);

    var txt7 = document.createTextNode('text');  
    para.appendChild(txt7);

    var enlace3 = document.createElement('a'); 
    var txt8 = document.createTextNode('text');
    enlace3.appendChild(txt8);
    para.appendChild(enlace3);
    
    var txt9 = document.createTextNode('text');  
    para.appendChild(txt9);

    document.body.appendChild(para);
}