window.addEventListener("load",iniciar);

function iniciar() {
    var tabla = document.createElement('table');
    var tr = document.createElement('tr');

    tabla.setAttribute("border","1");

    for (let i = 0; i < 20 ; i++) {
        var tr = document.createElement('tr');

        for (let i = 0; i < 20; i++) {
            var columna = document.createElement('td');
            var txt = document.createTextNode('000');
    
            columna.appendChild(txt);
            tr.appendChild(columna);
        }
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
    var enlace = document.createElement('a');
    var textEnlace = document.createTextNode('Pulsa aquí');
    enlace.appendChild(textEnlace);
    document.body.appendChild(enlace);
}