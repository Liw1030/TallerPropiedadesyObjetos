// # Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
// usando métodos y condicionales (if/else).
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento. 


function CarritoCompras() {
  this.productos = [];
  this.total = 0;

  this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre: nombre, precio: precio });
    this.total += precio;
    console.log('Producto -> ', nombre,':',precio);
  };

  this.calcularDescuento = function() {
    console.log('Total sin descueto: ', this.total);
    if (this.total > 100) {
      let descuento = this.total * 0.10;
      this.total -= descuento;
      console.log('Se aplicó un 10% de descuento ', descuento.toFixed(2));
    } else if (this.total > 50 && this.total <= 100) {
      let descuento = this.total * 0.05;
      this.total -= descuento;
      console.log('Se aplicó un 5% de descuento ', descuento.toFixed(2));
    } else {
      console.log('No se aplicó ningún descuento.');
    }
    console.log('Total final: $', this.total);
  };
}

//* creo el primer carrito 
let carrito = new CarritoCompras();

carrito.agregarProducto('Carne', 20);
carrito.agregarProducto('Arroz', 5);
carrito.agregarProducto('Papa', 26);

carrito.calcularDescuento();
