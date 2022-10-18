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

var tanques = [];
var habitantes = [];
let localidades = [];
const pantalla = document.getElementById("pantalla");

function añadir(elemento) {
  pantalla.style.display = "block";
  var formTanque = document.getElementById("añadirTanque");
  var formLocalidad = document.getElementById("añadirLocalidad");
  var formHabitante = document.getElementById("añadirHabitantes");
  switch (elemento.name) {
    case "tanque":
      formTanque.style.display = "block";
      formLocalidad.style.display = "none";
      formHabitante.style.display = "none";
      break;
    case "localidad":
      formLocalidad.style.display = "block";
      formTanque.style.display = "none";
      formHabitante.style.display = "none";
      var boton = formLocalidad.querySelector("button");
      boton.addEventListener("click", function () {
        var inputs = formLocalidad.querySelectorAll(".form-control");
        localidades.push(
          new Localidad(inputs[0].value, inputs[1].value, inputs[2].value)
        );
      });

      break;
    case "habitante":
      formLocalidad.style.display = "none";
      formTanque.style.display = "none";
      formHabitante.style.display = "block";
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
  pantalla.style.display = "block";
  switch (elemento.name) {
    case "tanque":
      if (tanques.length > 0) {
        tanques.forEach((element) => {
          columnaAñadir.textContent = element.nombre;
        });
      } else {
        columnaAñadir.textContent = "No hay tanques";
      }
      break;
    case "localidad":
      if (localidades.length > 0) {
        localidades.forEach((element) => {
          columnaAñadir.textContent = element.nombre;
        });
      } else {
        //texto.appendChild(document.createTextNode("No hay localidades"));
        //pantalla.appendChild ='No hay localidades';
      }

      break;
    case "habitante":
      if (habitantes.length > 0) {
        habitantes.forEach((element) => {
          columnaAñadir.textContent = element.nombre;
        });
      } else {
        columnaAñadir.textContent = "No hay habitantes";
      }
      break;
  }
}
