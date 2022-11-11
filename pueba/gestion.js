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
const pantallaEliminar = document.getElementById("pantallaEliminar");
const pantallaModificar = document.getElementById("pantallaModificar");
const selecEliminar = document.getElementById("selectEliminar");
const tituloEliminar = document.getElementById("tituloEliminar");
var formTanque = document.getElementById("añadirTanque");
var formLocalidad = document.getElementById("añadirLocalidad");
var formHabitante = document.getElementById("añadirHabitantes");

window.mostrarAñadir = mostrarAñadir;
window.mostrarEliminar = mostrarEliminar;
window.mostrarModificar = mostrarModificar;
window.visualizar = visualizar;
window.añadir = añadir;
window.eliminar = eliminar;
window.modificar = modificar;

function mostrarAñadir(elemento) {
  pantallaAñadir.style.display = "block";
  pantallaVisualizar.style.display = "none";
  pantallaEliminar.style.display = "none";
  pantallaModificar.style.display = "none";
  switch (elemento.name) {
    case "tanque":
      const select1 = formTanque.querySelector(".form-select");
      var options1 = "";
      if (localidades.listaLocalidades.length > 0) {
        for (
          let index = 0;
          index < localidades.listaLocalidades.length;
          index++
        ) {
          options1 +=
            "<option>" +
            localidades.listaLocalidades[index].nombre +
            "</option>";
        }
      } else {
        options1 = "<option > No hay Localidades</option>";
      }
      select1.innerHTML = options1;
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
      formHabitante.style.display = "block";
      const select = formHabitante.querySelector(".form-select");
      var options = "";
      if (tanques.listaTanques.length > 0) {
        for (let index = 0; index < tanques.listaTanques.length; index++) {
          options +=
            "<option selected>" +
            tanques.listaTanques[index].numero +
            "</option>";
        }
      } else {
        options = "<option > No hay tanques</option>";
      }
      select.innerHTML = options;
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
        if (tanques.listaTanques.length <= 0) {
          throw "No puedes crear un habitante sin antes crear un tanque";
        }
        var inputs2 = formHabitante.querySelectorAll(".form-control");
        var select2 = formHabitante.querySelector(".form-select");
        const habitante = new Habitante(
          inputs2[0].value,
          inputs2[1].value,
          select2[select2.selectedIndex].textContent
        );
        habitantes.añadir(habitante);
        break;
      case "Tanque":
        if (localidades.listaLocalidades.length <= 0) {
          throw "No puedes crear un tanque sin antes crear una localidad";
        }
        var inputs3 = formTanque.querySelectorAll(".form-control");
        var select3 = formTanque.querySelector(".form-select");
        const tanque = new Tanque(
          inputs3[0].value,
          inputs3[1].value,
          select3[select3.selectedIndex].textContent
        );
        tanques.añadir(tanque);
        break;
    }
  } catch (ex) {
    alert(ex);
  }
  pantallaAñadir.style.display = "none";
}

function mostrarEliminar(elemento) {
  pantallaAñadir.style.display = "none";
  pantallaEliminar.style.display = "block";
  pantallaVisualizar.style.display = "none";
  pantallaModificar.style.display = "none";
  switch (elemento.name) {
    case "tanque":
      tituloEliminar.textContent = "Tanques";
      var options4 = "";
      if (tanques.listaTanques.length > 0) {
        for (let index = 0; index < tanques.listaTanques.length; index++) {
          options4 +=
            "<option >" + tanques.listaTanques[index].numero + "</option>";
        }
      } else {
        options4 = "<option > No hay Tanques</option>";
      }
      selecEliminar.innerHTML = options4;
      break;
    case "localidad":
      tituloEliminar.textContent = "Localidades";
      var options = "";
      if (localidades.listaLocalidades.length > 0) {
        for (
          let index = 0;
          index < localidades.listaLocalidades.length;
          index++
        ) {
          options +=
            "<option >" +
            localidades.listaLocalidades[index].nombre +
            "</option>";
        }
      } else {
        options = "<option > No hay Localidades</option>";
      }
      selecEliminar.innerHTML = options;
      break;
    case "habitante":
      tituloEliminar.textContent = "Habitantes";
      var options = "";
      if (habitantes.listaHabitantes.length > 0) {
        for (
          let index = 0;
          index < habitantes.listaHabitantes.length;
          index++
        ) {
          options +=
            "<option >" +
            habitantes.listaHabitantes[index].nombre +
            "</option>";
        }
      } else {
        options = "<option > No hay Habitantes</option>";
      }
      selecEliminar.innerHTML = options;
      break;
  }
}
function eliminar() {
  switch (tituloEliminar.textContent) {
    case "Localidades":
      if (localidades.listaLocalidades.length > 0) {
        localidades.eliminarLocalidad(
          selecEliminar[selecEliminar.selectedIndex].textContent
        );
        if (tanques.listaTanques.length > 0) {
          var tanquesEliminados = tanques.eliminarTanqueLoc(
            selecEliminar[selecEliminar.selectedIndex].textContent
          );
          if (habitantes.listaHabitantes.length > 0) {
            habitantes.eliminarHabitanteLoc(tanquesEliminados);
          }
        }
      }
      break;
    case "Tanques":
      if (tanques.listaTanques.length > 0) {
        tanques.eliminarTanque(
          selecEliminar[selecEliminar.selectedIndex].textContent
        );
        if (habitantes.listaHabitantes.length > 0) {
          habitantes.eliminarHabitanteTan(
            selecEliminar[selecEliminar.selectedIndex].textContent
          );
        }
      }

      break;
    case "Habitantes":
      if (habitantes.listaHabitantes.length > 0) {
        habitantes.eliminarHabitante(
          selecEliminar[selecEliminar.selectedIndex].textContent
        );
      }
      break;
  }
  pantallaEliminar.style.display = "none";
}

function mostrarModificar(elemento) {
  pantallaAñadir.style.display = "none";
  pantallaEliminar.style.display = "none";
  pantallaVisualizar.style.display = "none";
  pantallaModificar.style.display = "block";
  const Tabla = document.getElementById("TablaModificar");
  const header = Tabla.querySelector(".headTablaMod");
  const titulo = header.querySelectorAll(".tituloModificar");
  const body = Tabla.getElementsByTagName("tbody");
  const h2 = document.getElementById("tituloModificar");
  switch (elemento.name) {
    case "tanque":
      h2.textContent = "Tanques";
      titulo[1].textContent = "Numero";
      titulo[2].textContent = "Capacidad";
      titulo[3].textContent = "Localidades";
      var options = "";
      if (localidades.listaLocalidades.length > 0) {
        for (let index = 0;index < localidades.listaLocalidades.length;index++) {
           options +="<option >" +localidades.listaLocalidades[index].nombre +"</option>";
        }
      } else {
        options = "<option > No hay Localidades</option>";
      }
      var filastanque = "";
      for (let index = 0; index < tanques.listaTanques.length; index++) {
        filastanque +=
          "<tr>" +
          "<th class='headTabla'> " +
          (index + 1) +
          "</th>" +
          "<th>" +
          "<input type='text' value='" +
          tanques.listaTanques[index].numero +
          "'>" +
          "</th>" +
          "<th>" +
          "<input type='text' value='" +
          tanques.listaTanques[index].capacidad +
          "'>" +
          "</th>" +
          "<th>" +
          "<select class='form-select' aria-label='Default select example'>"+options+
          "</select>"+
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
          "<input type='text' value='" +
          localidades.listaLocalidades[index].nombre +
          "'>" +
          "</th>" +
          "<th>" +
          "<input type='text' value='" +
          localidades.listaLocalidades[index].habitantes +
          "'>" +
          "</th>" +
          "<th>" +
          "<input type='text' value='" +
          localidades.listaLocalidades[index].provincia +
          "'>" +
          "</th>" +
          "</tr>";
      }
      body[0].innerHTML = filaslocalidad;
      break;
    case "habitante":
      h2.textContent = "Habitantes";
      titulo[1].textContent = "Nombre";
      titulo[2].textContent = "Edad";
      titulo[3].textContent = "Tanque";
      var options = "";
      if (tanques.listaTanques.length > 0) {
        for (let index = 0;index < tanques.listaTanques.length;index++) {
           options +="<option >" +tanques.listaTanques[index].numero +"</option>";
        }
      } else {
        options = "<option > No hay Tanques</option>";
      }
      var filashabitnates = "";
      for (let index = 0; index < habitantes.listaHabitantes.length; index++) {
        filashabitnates +=
          "<tr>" +
          "<th>" +
          (index + 1) +
          "</th>" +
          "<th> " +
          "<input type='text' value='" +
          habitantes.listaHabitantes[index].nombre +
          "'>" +
          "</th>" +
          "<th> " +
          " <input type='number' min='1' value='" +
          habitantes.listaHabitantes[index].edad +
          "'>" +
          "</th>" +
          "<th> " +
          "<select class='form-select' aria-label='Default select example'>"+options+
          "</select>"+
          "</th>" +
          "</tr>";
      }
      body[0].innerHTML = filashabitnates;
      break;
  }
}
function modificar() {
  const titulo = document.getElementById("tituloModificar").textContent;
  const table = document.getElementById("TablaModificar");
  const inputs= table.querySelectorAll('input');
  const selectModificar= table.querySelector('select');
  switch (titulo) {
    case 'Localidades':
      var contador=0;
      for (let index = 0; index < inputs.length; index+=3) {
        const datos=[inputs[index].value,inputs[index+1].value,inputs[index+2].value]
        localidades.modificar(contador,datos)
        contador++;
      }
      break;
    case 'Tanques':
      var contador=0;
      for (let index = 0; index < inputs.length; index+=2) {
        const datos=[inputs[index].value,inputs[index+1].value,selectModificar[selectModificar.selectedIndex].textContent]
        tanques.modificar(contador,datos)
        contador++;
      }
      break;
    case 'Habitantes':
      var contador=0;
      for (let index = 0; index < inputs.length; index+=3) {
        const datos=[inputs[index].value,inputs[index+1].value,selectModificar[selectModificar.selectedIndex].textContent]
        habitantes.modificar(contador,datos)
        contador++;
      }
      break;
  }
  pantallaModificar.style.display = "none";
}

function visualizar(elemento) {
  pantallaAñadir.style.display = "none";
  pantallaEliminar.style.display = "none";
  pantallaVisualizar.style.display = "block";
  pantallaModificar.style.display = "none";
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
          "<th class='headTabla'> " +
          (index + 1) +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].numero +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].capacidad +
          "</th>" +
          "<th>" +
          tanques.listaTanques[index].localidad +
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
      h2.textContent = "Habitantes";
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
