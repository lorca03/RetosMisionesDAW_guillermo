import Localida from "./localidad.js";

class Habitante {

    constructor(nombre,edad,Localidad) {
        this.nombre=nombre;
        this.edad=edad;
        this.localidad=Localidad;
    }
}

adios=new Localidad("gdh","gthtr","trhr");
alert(adios.nombre);