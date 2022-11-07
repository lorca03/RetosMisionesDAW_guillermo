
export class ListaHabitantes {

    listaHabitantes=[];

   añadir(Habitante) {
    this.listaHabitantes.forEach(element => {
        if (element.nombre===Habitante.nombre && 
            element.edad===Habitante.edad && 
            element.tanque===Habitante.tanque) {
            throw 'Este habitante ya existe'
        }
    });
       this.listaHabitantes.push(Habitante);
   }
}
