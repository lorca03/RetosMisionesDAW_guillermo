
export class ListaTanques {

     listaTanques=[];

    añadir(Tanque) {
        this.listaTanques.forEach(element => {
            if (element.numero==Tanque.numero) {
                throw 'El numero de este tanque ya existe'
            }
        });
        this.listaTanques.push(Tanque);
    }
}
