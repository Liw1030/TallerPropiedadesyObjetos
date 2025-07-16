// # Ejercicio 3: Reproductor de Música
// Tareas:
// 1.Crea un objeto Reproductor usando una función constructora con:
// •Una propiedad estado con valor inicial "detenido" (otros valores
// posibles: "reproduciendo", "pausado").
// 2.Implementa estos métodos:
// •play():
// •Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
// música...".
// •Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
// •pausar():
// •Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
// •Si no, muestra: "No hay música reproduciéndose.".
// •detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".


function reproductorMusica(estado){
    this.estado = 'detenido' 
    this.play = function(){
        if (this.estado == 'detenido' || this.estado == 'pausado') {
            this.estado = 'reproduciendo'
            console.log('Reproduciendo música...');
            
        }else{
            console.log('Ya la música se esta reproduciendo');
        }
    }
    this.pausa = function(){
        if (this.estado == 'reproduciendo'){
            this.estado = 'pausado'
            console.log('Música pausada');
        }else{
            console.log('No hay música reproduciéndose');
        }
    }
    this.detener = function() {
        this.estado = 'detenido';
        console.log('Música detenida');
    }

}

//* creo un nuevo reproductor
const miReproductor = new reproductorMusica();

miReproductor.play();    
miReproductor.pausa();  
miReproductor.play();    
miReproductor.detener(); 
miReproductor.pausa();  