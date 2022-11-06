class Habitante {
    constructor(nombre, edad, Localidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.localidad = Localidad;
    }
  }
  class Localidad {
    constructor(nombre, habitantes, provincia) {
      if (nombre=='' ) {
        throw 'El nombre de la Localidad es obligatorio.'
      }
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
  var formTanque = document.getElementById("añadirTanque");
    var formLocalidad = document.getElementById("añadirLocalidad");
    var formHabitante = document.getElementById("añadirHabitantes");
  
  function mostrarAñadir(elemento) {
    pantallaAñadir.style.display = "block";
    pantallaVisualizar.style.display='none';
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
        break;
      case "habitante":
        formLocalidad.style.display = "none";
        formTanque.style.display = "none";
        formHabitante.style.display = "block";
        break;
    }
  }
  /*Añadir*/
  function añadir(objeto) {
    try {
      switch (objeto.parentNode.id.substr(6)) {
        case 'Localidad':
          var inputs = formLocalidad.querySelectorAll(".form-control");
          const localidad=new Localidad(inputs[0].value,inputs[1].value,inputs[2].value);
          localidades.push(localidad);
          break;
          case 'Habitantes':
            var inputs2 = formHabitante.querySelectorAll(".form-control");
            var select2 = formHabitante.querySelectorAll(".form-select");
            const habitante=new Habitante(inputs2[0].value,inputs2[1].value,select2[0][0].value);
            habitantes.push(habitante);
          break;
          case 'Tanque':
            var inputs3 = formTanque.querySelectorAll(".form-control");
            var select3 = formTanque.querySelectorAll(".form-select");
            const tanque=new Tanque(inputs3[0].value,inputs3[1].value,select3[0][0].value);
            tanques.push(tanque);
          break;
      }
    } catch (ex) {
      alert(ex)
    }
    
    pantallaAñadir.style.display = "none";
  };

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
    const h2=document.querySelector('.mostrando');
    const header=Tabla.getElementsByTagName('thead');
    const titulo=header[0].querySelectorAll('.tituloMostrar');
    const body=Tabla.getElementsByTagName('tbody');
    switch (elemento.name) {
      case "tanque":
        h2.textContent='Tanques'
        titulo[1].textContent='Numero';
        titulo[2].textContent='Capacidad';
        titulo[3].textContent='Localidades';
        var filastanque='';
        for (let index = 0; index < tanques.length; index++) {
          filastanque += '<tr>'+
                    '<th>'+(index+1)+'</th>'+
                      '<th>'+tanques[index].numero+'</th>'+
                      '<th>'+tanques[index].capacidad+'</th>'+
                      '<th>'+tanques[index].localidades+'</th>'+
                      '</tr>';
        }
        body[0].innerHTML= filastanque; 
        break;
      case "localidad":
        h2.textContent='Localidades'
        titulo[1].textContent='Nombre';
        titulo[2].textContent='Habitantes';
        titulo[3].textContent='Provincia';
        var filaslocalidad='';
        for (let index = 0; index < localidades.length; index++) {
          filaslocalidad += '<tr>'+
                    '<th>'+(index+1)+'</th>'+
                      '<th>'+localidades[index].nombre+'</th>'+
                      '<th>'+localidades[index].habitantes+'</th>'+
                      '<th>'+localidades[index].provincia+'</th>'+
                      '</tr>';
        }
        body[0].innerHTML= filaslocalidad; 
        
        break;
      case "habitante":
        h2.textContent='Habitentes'
        titulo[1].textContent='Nombre';
        titulo[2].textContent='Edad';
        titulo[3].textContent='Localidad';
        var filashabitnates='';
        for (let index = 0; index < habitantes.length; index++) {
          filashabitnates += '<tr>'+
                    '<th>'+(index+1)+'</th>'+
                      '<th>'+habitantes[index].nombre+'</th>'+
                      '<th>'+habitantes[index].edad+'</th>'+
                      '<th>'+habitantes[index].localidad+'</th>'+
                      '</tr>';
        }
        body[0].innerHTML= filashabitnates; 
        break;
    }
  }