/*Ejercicio 1. Una nueva sala de conciertos local necesita crear una aplicación para gestionar las bandas que solicitan actuar en ella. Para ello usando las estructuras de datos más adecuadas (a partir de ES6), deberás implementar un programa que gestione la siguiente información:

    Bandas:
    Nombre
    Año de formación
    Lista de integrantes: formada por el dni, nombre y apellido. No podrá haber, evidentemente, dos componentes en la lista con el mismo dni.
    Teléfono de contacto 
    Estilo
    MostrarBanda
    MostrarIntegrantes



Con estas bandas se quiere mantener un listado con el que se permita:

    imprimirListadoBandas
    buscarBandaPorNombre: busca una banda en la lista por su nombre
    buscarBandasPorEstilo: busca las bandas en la lista que pertenezcan a un estilo dado
    ordenarBandasPorAño: ordena la lista por año de formación
    eliminarBanda: elimina una banda dada por su nombre si esta se encuentra en la lista */
integrantes1 = [];
datos1 = ["Alejandro","Martin","134132g"];
datos2=["Jose Ramon","Perez","786234f"];
integrantes1 = [datos1,datos2];

var banda1 = new Banda("Fito y fitipaldis",1993,integrantes1,693291233,"Rock");

integrantes2 = [];
datos2 = ["Benito","Martinez","563124s"];
datos2=["Cristian","Carrion","735753y"];
integrantes2 = [datos2,datos2];

var banda2 = new Banda("Paronama77",2015,integrantes2,678514778,"Rap");

arrayBandas = [banda1,banda2];
var listado = new ListadoBandas(arrayBandas);

listado.imprimirListadoBandas();

var buscarBandaNombre = listado.buscarBandaPorNombre("Fito y fitipaldis");
buscarBandaNombre.forEach(element => {
    element.mostrarBanda();
});


var buscarBandaNombre = listado.buscarBandasPorEstilo("Rap");
buscarBandaNombre.forEach(element => {
    element.mostrarBanda();
});

// listado.ordenarBandasPorAño();
