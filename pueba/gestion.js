class Habitante {

    constructor(nombre,edad,Localidad) {
        this.nombre=nombre;
        this.edad=edad;
        this.localidad=Localidad;
    }
}
class Localidad {

    constructor(nombre,habitantes,provincia) {
        this.nombre=nombre;
        this.habitantes=habitantes;
        this.provincia=provincia;
    }

    
}
class Tanque {

    constructor(numero,capacidad,localidad) {
        this.numero=numero;
        this.capacidad=capacidad;
        this.localidad=localidad;
    }

    
}