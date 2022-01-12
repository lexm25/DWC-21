window.addEventListener("load",iniciar);

function iniciar() {
    document.getElementsByTagName('li')[0].parentNode.setAttribute("type","square");

    var principio = document.createElement('li');
    var txt1 = document.createTextNode('Audi');
    principio.appendChild(txt1);
    document.getElementsByTagName('li')[0].parentNode.insertBefore(principio,document.getElementsByTagName('li')[0].parentElement.firstChild);

    var final = document.createElement('li');
    var txt2 = document.createTextNode('Opel');
    final.appendChild(txt2);
    document.getElementsByTagName('li')[0].parentNode.appendChild(final);

    var medio = document.createElement('li');
    var txt3 = document.createTextNode('Renault');
    medio.appendChild(txt3);
    document.getElementsByTagName('li')[0].parentNode.insertBefore(medio,document.getElementsByTagName('li')[2]);

}