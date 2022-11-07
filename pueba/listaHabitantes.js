
export class ListaHabitantes {

    listaHabitantes=[];

   añadir(Habitante) {
    this.listaHabitantes.forEach(element => {
        alert( element.tanque.numero);
        alert( Habitante.tanque.numero);
        if (element.nombre==Habitante.nombre && 
            element.edad==Habitante.edad && 
            element.tanque.numero==Habitante.tanque.numero) {
            throw 'Este habitante ya existe'
        }
    });
       this.listaHabitantes.push(Habitante);
   }
}
