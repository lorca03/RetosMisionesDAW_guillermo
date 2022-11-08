
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
    eliminarTanque(numeroTan){
        var listaTanques2=[]
        this.listaTanques.forEach(element => {
            if (element.numero!=numeroTan) {
                listaTanques2.push(element);
            }
        });
        this.listaTanques=listaTanques2;
    }
    eliminarTanqueLoc(nomLoc){
        var tanquesEliminados=[];
        var listaTanques2=[]
        this.listaTanques.forEach(element => {
            if (element.localidad!=nomLoc) {
                listaTanques2.push(element);
            }else{
                tanquesEliminados.push(element.numero);
            }
        });
        this.listaTanques=listaTanques2;
        return tanquesEliminados;
    }
}
