window.addEventListener("load",iniciar);

function iniciar() {
    document.getElementById("edad").addEventListener("blur",validarEdad); 

}

function validarEdad() {
    var edad = document.getElementById("edad").value;
    document.getElementById("campo").setAttribute("value",edad);
    if(edad < 18){
        var campo = document.createElement('p');
        var txt = document.createTextNode('No puede ser menor de edad');
        campo.appendChild(txt);
        
        var formulario = document.getElementsByTagName('form')[0];
        formulario.appendChild(campo);
    }
    else{
        document.getElementsByTagName('p')[0].remove();
    }
}