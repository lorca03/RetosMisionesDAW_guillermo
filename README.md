# RetosMisionesDAW_guillermo
Esta pagina es un gestor de datos(Tanques de agua, Habitantes,Localidades).En este gestor puedes crear, eliminar, modificar y visualizar los tres tipos de datos.Este proyecto se basa en un ejercicio de la pagina [aprende a programar](https://aprendeaprogramar.org/moodle/)
## Estilos 🎨 
1. Fuente *Roboto Condensed*
2. Paleta de colores 
  * #3b4c3a
  * #fff
## Imagenes 📷
[Fondo de pantalla](pueba/kenia.jpg)
## Construido con 🛠️
* HTML
* CSS
* Bootstrap 5
* JavaScript
## Autor ✒️
### **Guillermo Lorca**
## Resumen Ejercicio 📃
Tu misión consiste en desarrollar un programa que permita la gestión completa de los siguientes datos:
- Tanque: contendrá la información de cada tanque (número, capacidad, localidad)
- Localidad: almacenará información de localidades (nombre, número de habitantes, provincia).
- Habitante: contendrá información de los habitantes que pueden acceder a los tanques para abastecerse de agua 
(nombre, edad, Localidad (un tanque solo tiene una Localidad)). 

Ten en cuenta que los números de tanque son únicos. 
Que una localidad puede tener varios tanques. 
Y que un habitante únicamente puede acceder a un tanque. 
Por tanto elegid la estructura de objetos más adecuada para su correcto almacenamiento.
## Estructura 
* HTML
  * En el html tenemos botones con los que nos aparecen distintas secciones desde las que podemos gestionar los datos.
* JS
  * En el JS tenemos distintos tipos de clases:
    * Los objetos basicos que representas los datos que vamos a manejar 
      * Tanque
      * Localidad
      * Habitante
    * Despues estan las listas, que simulan una BD ya que son arrays de los anteriores objetos pero que a la hora de introdudirles datos hay condiciones.
      * ListaTanque
      * ListaLocalidad
      * ListaHabitante
    * Por ultimo esta el archivo gestion, el cual se encarga de cambiar lo que se ve al dar a los botones en el html. Tambien llama a las distintas listas y               les dice lo que deben hacer, basicamente es el centro neuralgico del programa.
    
