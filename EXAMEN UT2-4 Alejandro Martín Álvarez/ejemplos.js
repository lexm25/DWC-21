
    // Ordenado por valor mayor menor
    const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
    console.log(mapSort1);
    // Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}
    // Ordenado por valor menor mayor
    const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
    console.log(mapSort2);
    // Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

    // Ordenado por clave
    const mapSort3 = new Map([...myMap.entries()].sort());
    console.log(mapSort3);
    // Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}
    // Ordenado por clave invertido
    const mapSort4 = new Map([...myMap.entries()].reverse());
    console.log(mapSort4);
    // Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}

/*--------------------------------------------------------------------------------------------------*/
function ordenarNombre(arrayCalificaciones) {
  return arrayCalificaciones.sort(function (a,b) {
      if (a[0].nombre > b[0].nombre ) {
        return 1;
      } else if (a[0].nombre < b[0].nombre) {
        return -1;
      } 
      return 0;
    });
}
/*--------------------------------------------------------------------------------------------------*/
ordenarBandasPorAnio = () => {
    return this.arrayBandas.sort((a,b) => {
        if (a.anioFormacion > b.anioFormacion)
        {
          return 1;
        } else if (a.anioFormacion < b.anioFormacion)
        {
          return -1;
        } 
        return 0;
      });
}
/*--------------------------------------------------------------------------------------------------*/
