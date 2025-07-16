// # Ejercicio 1: Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1. Usa el constructor Libro para crear un objeto con título y autor.
// 2. Agrega una propiedad prestado = false.
// 3. Implementa el método prestar() que:
//   • Cambie prestado a true si el libro está disponible.
//   • Muestre un mensaje de error si ya está prestado (usando if).
// 4. Prueba prestar el libro dos veces y observa los mensajes.

function libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;
  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true; 
      return `El libro "${this.titulo}" ha sido prestado.`;
    } else {
      return `El libro "${this.titulo}" ya No esta disponible.`;
    }
  };
}

//* Creo un libro
let miLibro = new libro('Cien años de soledad', 'Gabriel García Márquez');

//* Pruebo prestar dos veces
console.log(miLibro.prestar()); // Primera vez: lo presta
console.log(miLibro.prestar()); // Segunda vez: mensaje de error


//* Creo Otro
let miLibro2 = new libro('La fuerza de Sheccid','Carlos Cuauhtémoc Sánchez');
console.log(miLibro2.prestar()); // Primera vez: lo presta