let contenedorMensaje = document.getElementById("cont-mensaje");
let boton = document.getElementById("botonCopiar");
let contenedor = document.querySelector(".contenedor__1");
let muñeco =  document.getElementById("idmuñeco");

function encriptar(){
    let texto = document.getElementById("textarea__1").value;
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("textarea__1").value.length != 0){
        //document.getElementById("textarea__1").value = textoCifrado;
        document.getElementById("mensaje-encriptado").textContent = textoCifrado;
        //document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito";
        //document.getElementById("parrafo").textContent = "";
        mostrarOcultar();

     }else{
        muñeco.classList.remove("ocultar");
        contenedor.classList.remove("ocultar");
        //muñeco.src ="assets/Muñeco.png";
        alert   ("Por favor ingresar texto");
    }
}

function mostrarOcultar(){
//   if (boton.hidden = true){
        muñeco.classList.add("ocultar");
        contenedor.classList.add("ocultar");
        boton.classList.remove("ocultar");
        contenedorMensaje.classList.remove("ocultar");
        //tituloMensaje.classList.add("ocultar");
        //parrafo.classList.add("ocultar");
/*    }else{
        muñeco.classList.remove("ocultar");
        contenedor.classList.remove("ocultar");
        boton.classList.add("ocultar");
        contenedorMensaje.classList.add("ocultar");
    }*/
}
function desencriptar(){
    let texto = document.getElementById("textarea__1").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (document.getElementById("textarea__1").value.length != 0){
        document.getElementById("mensaje-encriptado").textContent = textoCifrado;
        mostrarOcultar();
    }
}
function copiarTexto(){
    document.getElementById("textarea__1").value = document.getElementById("mensaje-encriptado").textContent;
    muñeco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
    boton.classList.add("ocultar");
    contenedorMensaje.classList.add("ocultar");
}