let puntosUsuario=0;
let puntosPc=0;

let instrucciones = document.querySelector("#instrucciones")
let contenedorPuntosUsuario  = document.querySelector("#puntos-usuario")
let contenedorPuntospc  = document.querySelector("#puntos-computadora")
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");
let elegiTuarma=document.querySelector("#elegi-tu-arma")

let botonesArmas = document.querySelectorAll(".arma")

botonesArmas.forEach(boton=>{
    boton.addEventListener("click", iniciarTurno)
});

function iniciarTurno(e){

        let eleccionPc= Math.floor( Math.random()*3)
        let eleccionUsuario= e.currentTarget.id;

        if(eleccionPc===0){
            eleccionPc="piedra🪨"
        }else if(eleccionPc===1){
            eleccionPc="papel📋"
        }else if (eleccionPc===2){
            eleccionPc="tijera✂️"
        }



        if(
            (eleccionUsuario==="piedra🪨" && eleccionPc==="tijera✂️") ||(eleccionUsuario==="tijera✂️" && eleccionPc==="papel📋")||
            (eleccionUsuario==="papel📋" && eleccionPc==="piedra🪨")
        ){
            ganaUsuario()
        }else if (

            (eleccionPc==="piedra🪨" && eleccionUsuario==="tijera✂️") ||(eleccionPc==="tijera✂️" && eleccionUsuario==="papel📋")||
            (eleccionPc==="papel📋" && eleccionUsuario==="piedra🪨")
        ){
            ganaPC()
        }else{
            empate()
        }

            mensaje.classList.remove("disabled")
            contenedorEleccionPc.innerText= eleccionPc
            contenedorEleccionUsuario.innerText=eleccionUsuario

            if(puntosUsuario===5||puntosPc===5){
                if(puntosUsuario===5){
                    instrucciones.innerText="Ganaste el juego!"
                }
                if(puntosPc==5){
                    instrucciones.innerText="La computadora gano el juego"
                }

                elegiTuarma.classList.add("disabled")
                reiniciar.classList.remove("disabled")
                reiniciar.addEventListener("click", reiniciarJuego)
            }
}



function ganaUsuario (){
    puntosUsuario++
    contenedorPuntosUsuario.innerText=puntosUsuario
    contenedorGanaPunto.innerText="Ganaste un punto!🔥"
}

function ganaPC(){
    puntosPc++
    contenedorPuntospc.innerText=puntosPc
    contenedorGanaPunto.innerText="La compu gano un punto!🔥"
}


function empate(){
    contenedorGanaPunto.innerText="Empate!🔥"
}

function reiniciarJuego(){
    reiniciar.classList.add("disabled")
    elegiTuarma.classList.remove("disabled")
    mensaje.classList.add("disabled")

    puntosPc=0
    puntosUsuario=0
    contenedorPuntosUsuario.innerText=puntosUsuario
    contenedorPuntospc.innerText=puntosPc

    instrucciones.innerText="El primero en llegar a 5 puntos gana"

}