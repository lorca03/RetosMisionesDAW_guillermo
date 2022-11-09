
export class ListaLocalidades {

    listaLocalidades=[];

   añadir(Localidad) {
    this.listaLocalidades.forEach(element => {
        if (element.nombre==Localidad.nombre) {
            throw 'Esta localidad ya existe'
        }
    });
       this.listaLocalidades.push(Localidad);
   }
   eliminarLocalidad(nombreLoc){
    var listaLocalidades2=[]
    this.listaLocalidades.forEach(element => {
        if (element.nombre!=nombreLoc) {
            listaLocalidades2.push(element);
        }
    });
    this.listaLocalidades=listaLocalidades2;
   }
}
