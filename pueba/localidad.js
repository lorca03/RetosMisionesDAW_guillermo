

export  class Localidad {

    constructor(nombre, habitantes, provincia) {
        if (nombre=='' ) {
          throw 'El nombre de la Localidad es obligatorio.'
        }
        this.nombre = nombre;
        this.habitantes = habitantes;
        this.provincia = provincia;
      }

    
}
