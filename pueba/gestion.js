import { Habitante } from "./habitante.js";
import { Localidad } from "./localidad.js";
import { Tanque } from "./tanque.js";
import { ListaTanques } from "./listaTanques.js";
import { ListaHabitantes } from "./listaHabitantes.js";
import { ListaLocalidades } from "./listaLocalidades.js";

var tanques = new ListaTanques();
var habitantes = new ListaHabitantes();
let localidades = new ListaLocalidades();

const pantallaAñadir = document.getElementById("pantallaAñadir");
const pantallaVisualizar = document.getElementById("pantallaVisualizar");
var formTanque = document.getElementById("añadirTanque");
var formLocalidad = document.getElementById("añadirLocalidad");
var formHabitante = document.getElementById("añadirHabitantes");

window.mostrarAñadir = mostrarAñadir;
window.eliminar = eliminar;
window.modificar = modificar;
window.visualizar = visualizar;
window.añadir = añadir;

function mostrarAñadir(elemento) {
  pantallaAñadir.style.display = "block";
  pantallaVisualizar.style.display = "none";
  switch (elemento.name) {
    case "tanque":
      if (localidades.listaLocalidades.length > 0) {
        const select1 = formTanque.querySelector(".form-select");
        var options1 = "";
        for (
          let index = 0;
          index < localidades.listaLocalidades.length;
          index++
        ) {
          options1 +=
            "<option>" +
            localidades.listaLocalidades[index].nombre +
            "</option>";

          select1.innerHTML = options1;
        }
      }

      formTanque.style.display = "block";
      formLocalidad.style.display = "none";
      formHabitante.style.display = "none";
      break;
    case "localidad":
      formLocalidad.style.display = "block";
      formTanque.style.display = "none";
      formHabitante.style.display = "none";
      break;
    case "habitante":
      formLocalidad.style.display = "none";
      formTanque.style.display = "none";
      if (tanques.listaTanques.length > 0) {
        const select = formHabitante.querySelector(".form-select");
        var options = "";
        for (let index = 0; index < tanques.listaTanques.length; index++) {
          options +=
            "<option>" + tanques.listaTanques[index].numero + "</option>";
        }
        select.innerHTML = options;
      }

      formHabitante.style.display = "block";
      break;
  }
}
/*Añadir*/
function añadir(objeto) {
  try {
    switch (objeto.parentNode.id.substr(6)) {
      case "Localidad":
        var inputs = formLocalidad.querySelectorAll(".form-control");
        const localidad = new Localidad(
          inputs[0].value,
          inputs[1].value,
          inputs[2].value
        );
        localidades.añadir(localidad);
        break;
      case "Habitantes":
        var inputs2 = formHabitante.querySelectorAll(".form-control");
        var select2 = formHabitante.querySelectorAll(".form-select");
        const habitante = new Habitante(
          inputs2[0].value,
          inputs2[1].value,
          select2[0][0].textContent
        );
        habitantes.añadir(habitante);

        break;
      case "Tanque":
        var inputs3 = formTanque.querySelectorAll(".form-control");
        var select3 = formTanque.querySelectorAll(".form-select");
        const tanque = new Tanque(
          inputs3[0].value,
          inputs3[1].value,
          select3[0][0].textContent
        );
        tanques.añadir(tanque);
        break;
    }
  } catch (ex) {
    alert(ex);
  }
  pantallaAñadir.style.display = "none";
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
  pantallaAñadir.style.display = "none";
  pantallaVisualizar.style.display = "block";
  const Tabla = pantallaVisualizar.querySelector(".table");
  const h2 = document.querySelector(".mostrando");
  const header = Tabla.getElementsByTagName("thead");
  const titulo = header[0].querySelectorAll(".tituloMostrar");
  const body = Tabla.getElementsByTagName("tbody");
  switch (elemento.name) {
    case "tanque":
      h2.textContent = "Tanques";
      titulo[1].textContent = "Numero";
      titulo[2].textContent = "Capacidad";
      titulo[3].textContent = "Localidades";
      var filastanque = "";
      for (let index = 0; index < tanques.listaTanques.length; index++) {
        filastanque +=
          "<tr>" +
          "<th>" +
          (index + 1) +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].numero +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].capacidad +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].localidades +
          "</th>" +
          "</tr>";
      }
      body[0].innerHTML = filastanque;
      break;
    case "localidad":
      h2.textContent = "Localidades";
      titulo[1].textContent = "Nombre";
      titulo[2].textContent = "Habitantes";
      titulo[3].textContent = "Provincia";
      var filaslocalidad = "";
      for (
        let index = 0;
        index < localidades.listaLocalidades.length;
        index++
      ) {
        filaslocalidad +=
          "<tr>" +
          "<th>" +
          (index + 1) +
          "</th>" +
          "<th>" +
          localidades.listaLocalidades[index].nombre +
          "</th>" +
          "<th>" +
          localidades.listaLocalidades[index].habitantes +
          "</th>" +
          "<th>" +
          localidades.listaLocalidades[index].provincia +
          "</th>" +
          "</tr>";
      }
      body[0].innerHTML = filaslocalidad;

      break;
    case "habitante":
      h2.textContent = "Habitentes";
      titulo[1].textContent = "Nombre";
      titulo[2].textContent = "Edad";
      titulo[3].textContent = "Tanque";
      var filashabitnates = "";
      for (let index = 0; index < habitantes.listaHabitantes.length; index++) {
        filashabitnates +=
          "<tr>" +
          "<th>" +
          (index + 1) +
          "</th>" +
          "<th>" +
          habitantes.listaHabitantes[index].nombre +
          "</th>" +
          "<th>" +
          habitantes.listaHabitantes[index].edad +
          "</th>" +
          "<th>" +
          habitantes.listaHabitantes[index].tanque +
          "</th>" +
          "</tr>";
      }
      body[0].innerHTML = filashabitnates;
      break;
  }
}
