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
  const pantallaAñadir = document.getElementById("pantallaAñadir");
  const pantallaVisualizar = document.getElementById("pantallaVisualizar");
  
  
  function añadir(elemento) {
    pantallaAñadir.style.display = "block";
    pantallaVisualizar.style.display='none';
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
          alert('aña')
          var inputs = formLocalidad.querySelectorAll(".form-control");
          localidades.push(new Localidad(inputs[0].value,inputs[1].value,inputs[2].value));
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
    pantallaAñadir.style.display='none';
    pantallaVisualizar.style.display = "block";
    const Tabla= pantallaVisualizar.querySelector('.table');
    const header=Tabla.getElementsByTagName('thead');
    const titulo=header[0].querySelectorAll('.tituloMostrar');
    const body=Tabla.getElementsByTagName('tbody');
    const filas=body[0].getElementById('filas');
    switch (elemento.name) {
      case "tanque":
        titulo[0].textContent='Numero';
        titulo[1].textContent='Capacidad';
        titulo[2].textContent='Localidades';
        /*var fila ='';
        for (let index = 0; index < tanques.length; index++) {
          fila += '<tr>'+
                   '<th>'+index+'</th>'+
                    '<th>'+tanques[index].nombre+'</th>'+
                  '</tr>'
        }
        document.body.replaceChild(fila,filas);*/
        break;
      case "localidad":
        titulo[0].textContent='Nombre';
        titulo[1].textContent='Habitantes';
        titulo[2].textContent='Provincia';
        /*var fila ='';
        for (let index = 0; index < localidades.length; index++) {
          fila += '<tr>'+
                   '<th>'+index+'</th>'+
                    '<th>'+localidades[index].nombre+'</th>'+
                  '</tr>'
        }
        alert(fila)
        document.body.replaceChild(fila,filas);*/
        
        break;
      case "habitante":
        titulo[0].textContent='Nombre';
        titulo[1].textContent='Edad';
        titulo[2].textContent='Localidad';
        /*var fila ='';
        for (let index = 0; index < tanques.length; index++) {
          fila += '<tr>'+
                   '<th>'+index+'</th>'+
                    '<th>'+tanques[index].nombre+'</th>'+
                  '</tr>'
        }
        document.body.replaceChild(fila,filas);*/
        break;
    }
  }