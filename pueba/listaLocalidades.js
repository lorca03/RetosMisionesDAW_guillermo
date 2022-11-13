
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
   modificar(conatador,datos){
    for (let index = 0; index <  this.listaLocalidades.length; index++) {
        if (this.listaLocalidades[index].nombre==datos[0] && index!=conatador) {
            throw 'Esta localidad ya existe'
        }
    }
    this.listaLocalidades[conatador].nombre=datos[0]
    this.listaLocalidades[conatador].habitantes=datos[1]
    this.listaLocalidades[conatador].provincia=datos[2]
   }

}
