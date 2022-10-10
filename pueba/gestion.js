class Habitante {
  constructor(nombre, edad, Localidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.localidad = Localidad;
  }
}
class Localidad {
  constructor(nombre, habitantes, provincia) {
    this.nombre = nombre;
    this.habitantes = habitantes;
    this.provincia = provincia;
  }
}
class Tanque {
  constructor(numero, capacidad, Localidad) {
    this.numero = numero;
    this.capacidad = capacidad;
    this.localidad = Localidad;
  }
}

const tanques = [];
const habitantes = [];
const localidades = [];
const pantalla = document.getElementById("pantalla");

function añadir(elemento) {
  pantalla.style.display = "block";
  switch (elemento.name) {
    case "tanque":
      document.getElementById("añadirTanque").style.display = "block";
      document.getElementById("añadirLocalidad").style.display = "none";
      document.getElementById("añadirHabitantes").style.display = "none";
      break;
    case "localidad":
      document.getElementById("añadirLocalidad").style.display = "block";
      document.getElementById("añadirTanque").style.display = "none";
      document.getElementById("añadirHabitantes").style.display = "none";
      break;
    case "habitante":
      document.getElementById("añadirLocalidad").style.display = "none";
      document.getElementById("añadirTanque").style.display = "none";
      document.getElementById("añadirHabitantes").style.display = "block";
      break;
  }
}
function eliminar(elemento) {
  switch (elemento.name) {
    case "tanque":
      break;
    case "localidad":
      break;
    case "habitante":
      break;
  }
}
function modificar(elemento) {
  switch (elemento.name) {
    case "tanque":
      break;
    case "localidad":
      break;
    case "habitante":
      break;
  }
}
function visualizar(elemento) {
  switch (elemento.name) {
    case "tanque":
      break;
    case "localidad":
      break;
    case "habitante":
      break;
  }
}
