# 📚 Biblioteca Escolar - Semana 14

Descripción del Proyecto

Este proyecto corresponde al desarrollo de una aplicación web para la gestión de una Biblioteca Escolar utilizando tecnologías frontend modernas. El sistema permite registrar libros, administrarlos y visualizar información estadística mediante una interfaz amigable e interactiva.

La aplicación fue desarrollada como parte de la asignatura **Diseño Web I - Ingeniería de Sistemas**, aplicando Bootstrap 5, JavaScript, LocalStorage y Chart.js.



Objetivos

* Implementar una interfaz moderna utilizando Bootstrap 5.
* Aplicar JavaScript para la manipulación dinámica del contenido.
* Utilizar LocalStorage para almacenar información de forma persistente.
* Generar estadísticas visuales mediante gráficos interactivos.
* Mejorar la experiencia de usuario mediante componentes dinámicos.



Tecnologías Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript ES6
* LocalStorage
* Chart.js



Funcionalidades Implementadas

1. Gestión de Libros

El sistema permite:

* Registrar nuevos libros.
* Almacenar información de título, autor, año y categoría.
* Visualizar todos los libros registrados.
* Cambiar el estado de disponibilidad de los libros.



2. Validación de Duplicados

Se implementó una validación que evita registrar libros con el mismo título y autor.

Beneficios:

* Evita registros repetidos.
* Mantiene la integridad de la información.
* Facilita la administración de la colección.



3. Sistema de Categorías

Cada libro puede clasificarse dentro de una categoría:

* Ficción
* No ficción
* Ciencia
* Historia
* Tecnología

Beneficios:

* Mejor organización de la biblioteca.
* Búsquedas más eficientes.
* Clasificación de contenidos.



4. Filtros Avanzados

La aplicación incluye filtros por:

* Título.
* Autor.
* Disponibilidad.
* Rango de años de publicación.

Los filtros pueden combinarse para realizar búsquedas más precisas.



5. Componentes Dinámicos Bootstrap

Se integraron componentes interactivos:

Tooltips

Permiten mostrar información adicional al pasar el cursor sobre un elemento.

Popovers

Muestran información complementaria al hacer clic sobre un botón.

Estos componentes mejoran significativamente la experiencia de navegación.



6. Reporte de Libros Más Leídos

El sistema registra la cantidad de préstamos realizados por cada libro.

Se genera automáticamente un ranking con los libros más solicitados por los usuarios.

Beneficios:

* Identificar preferencias de lectura.
* Obtener estadísticas de uso.
* Apoyar la toma de decisiones para futuras adquisiciones.



7. Estadísticas con Chart.js

Se implementó un gráfico interactivo que muestra:

* Cantidad de libros disponibles.
* Cantidad de libros prestados.

Además, se generan tarjetas informativas con estadísticas generales de la biblioteca.



8. Tema Oscuro y Claro

El usuario puede alternar entre:

* Modo Claro.
* Modo Oscuro.

La preferencia seleccionada se almacena automáticamente en LocalStorage para conservar la configuración en futuras visitas.


9. Persistencia de Datos

La información registrada permanece almacenada mediante LocalStorage, evitando la pérdida de datos al recargar la página.



Estructura del Proyecto

```text
BibliotecaEscolar/
│
├── index.html
├── script.js
├── README.txt
```



Instrucciones de Uso

1. Abrir el archivo `index.html` en el navegador.
2. Registrar nuevos libros utilizando el formulario.
3. Utilizar los filtros para realizar búsquedas específicas.
4. Consultar estadísticas y reportes generados automáticamente.
5. Cambiar entre modo claro y oscuro según preferencia.



Resultados Obtenidos

Se desarrolló una aplicación web funcional capaz de gestionar una biblioteca escolar mediante una interfaz moderna y dinámica.

La integración de Bootstrap, JavaScript y Chart.js permitió crear una experiencia de usuario más profesional, incorporando herramientas de visualización de datos, validaciones, filtros avanzados y personalización visual.



Conclusión

El proyecto demuestra la integración efectiva de tecnologías frontend modernas para la construcción de aplicaciones web interactivas. La implementación de filtros avanzados, gráficos estadísticos, componentes dinámicos y almacenamiento local permite ofrecer una solución práctica para la gestión de una biblioteca escolar, mejorando tanto la funcionalidad como la experiencia del usuario.
