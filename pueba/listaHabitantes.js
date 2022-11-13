export class ListaHabitantes {
  listaHabitantes = [];

  añadir(Habitante) {
    this.listaHabitantes.forEach((element) => {
      if (
        element.nombre === Habitante.nombre &&
        element.edad === Habitante.edad &&
        element.tanque === Habitante.tanque
      ) {
        throw "Este habitante ya existe";
      }
    });
    this.listaHabitantes.push(Habitante);
  }
  eliminarHabitante(nombreHab) {
    var listahabi2 = [];
    this.listaHabitantes.forEach((element) => {
      if (element.nombre != nombreHab) {
        listahabi2.push(element);
      }
    });
    this.listaHabitantes = listahabi2;
  }
  eliminarHabitanteTan(numTan) {
    var listahabi2 = [];
    this.listaHabitantes.forEach((element) => {
      if (element.tanque != numTan) {
        listahabi2.push(element);
      }
    });
    this.listaHabitantes = listahabi2;
  }
  eliminarHabitanteLoc(tanquesEliminados) {
    var listahabi2 = [];
    this.listaHabitantes.forEach((element) => {
      if (tanquesEliminados.includes(element.tanque) == false) {
        listahabi2.push(element);
      }
    });
    this.listaHabitantes = listahabi2;
  }
  modificar(conatador, datos) {
    for (let index = 0; index < this.listaHabitantes.length; index++) {
      if (this.listaHabitantes[index].nombre == datos[0] && index != conatador) {
        throw 'Este habitante ya existe'
      }
    }
    this.listaHabitantes[conatador].nombre = datos[0]
    this.listaHabitantes[conatador].edad = datos[1]
    this.listaHabitantes[conatador].tanque = datos[2]
  }
}