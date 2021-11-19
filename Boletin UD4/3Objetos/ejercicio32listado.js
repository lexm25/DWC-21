class ListadoBandas{
    constructor(bandas){
        this.bandas = bandas;
    }

    imprimirListadoBandas(){
        this.bandas.forEach(element => {
            element.mostrarBanda();
        });
    }

    buscarBandaPorNombre(nombre){
        return this.bandas.filter((banda) => banda.nombre.toUpperCase() == nombre.toUpperCase());
    }

    buscarBandasPorEstilo(estilo){
        return this.bandas.filter((banda) => banda.estilo.toUpperCase() == estilo.toUpperCase());
    }

    // ordenarBandasPorAño(){
    //     return this.bandas.sort((banda1,banda2)=>{
    //         if (banda1.anyoFormacion.toUpperCase()<banda2.anyoFormacion.toUpperCase()){
    //             return 1;
    //         } 
    //         else if (banda1.anyoFormacion.toUpperCase()>banda2.anyoFormacion.toUpperCase()){
    //             return -1;
    //         }
    //         return 0;
    //     });
    // } 
    eliminarBanda(){
        var borrado = this.bandas.findIndex((banda) => banda.nombre.toUpperCase() == nombre.toUpperCase());

    }
}