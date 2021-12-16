allCookies = document.cookie;
window.addEventListener("load", iniciar);

function iniciar() {
    //creamos un evento para que al pulsar el botón guarde los datos
    document.getElementById("submit").addEventListener("click", guardarCookies);
    //creamos un evento para que al comprobar el nombre y la habitacion salte la oferta
    document.getElementById("habitacion").addEventListener("blur", comprobar);
}

function guardarCookies() {
    //guardamos los datos que el usuario introduce en los campos en variables
    var nombre = document.getElementById("nombre").value;
    var numHabitacion = document.getElementById("habitacion").value;
    var cafe = document.getElementById("select").value;
    //creamos cookies con los datos introducidos
    document.cookie = "nombre=" + nombre;
    document.cookie = "habitacion=" + numHabitacion;
    document.cookie = "tipocafe=" + cafe;
    document.cookie =  nombre + numHabitacion + "=" + cafe;
}

function comprobar() {
    //funcion que busca por el usuario, numero de habitacion y café, para comprobar que la cookie está guardada
    //y lanzar el alert de oferta
    var usuario = document.getElementById("nombre").value;
    var numHabitacion = document.getElementById("habitacion").value;
    //la condicion seria que coincida por ejemplo con ruben13=moka
    if (document.cookie.split(';').some((item) => item.trim().startsWith(usuario+numHabitacion+'='))) {
        //guardamos el nombre del cafe
        const cafe = document.cookie
        .split('; ')
        .find(row => row.startsWith(usuario+numHabitacion+'='))
        .split('=')[1];
        //si el nombre del café coincide, se lanza el alert
        document.getElementById(cafe).selected = true;

        alert(usuario + " su café favorito " + cafe + " está en oferta");
    }
}