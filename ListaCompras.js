// # Ejercicio 2: Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.
// Tareas:
// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.Añade 3 productos con el método agregar().
// 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
// "1. Manzanas").
// 4.Muestra la lista completa en consola.

const prompt = require("prompt-sync")();

function listaDeCompras() {
  this.productos = [];
  this.agregar = function() {
    for (let i = 1; i <= 3; i++) {
      let producto = prompt('Ingresa el producto que vas a listar: ');
      this.productos.push(producto);
    }
  };
  this.mostrar = function() {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) { //*Con length muestro todo lo de la lista 
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

//* Crear lista y usarla
let miLista = new listaDeCompras();

miLista.agregar();  
miLista.mostrar();  