
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);
    console.log(numeroSecreto);


    if (numeroSecreto == numeroUsuario){
        asignarTextoElemento('p',`acertaste el numero secreto en ${intentos} intentos`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento('p','el numero que insertaste es menor al correcto');
        }else{
            asignarTextoElemento('p','el numero que insertaste es mayor que el correcto');
        }
        
        intentos++;
        limpiarCaja();
    };
    
}

function limpiarCaja (){
    document.getElementById('valorUsuario').value = '';
    
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
if(listaNumeroSorteado == numeroMaximo){
    asignarTextoElemento('p','has usado todos los numeros secretos posibles');
} else{
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){

    asignarTextoElemento('h1','juego secreto');
    asignarTextoElemento('p','indica un numero del 1 al 10');

    numeroSecreto = generarNumeroSecreto();

    intentos = 1; 
    }

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensj de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar boton reiniciar
   document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();



