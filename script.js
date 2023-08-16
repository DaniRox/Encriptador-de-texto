//variables y funciones para la accion de encriptar y desencriptar
const msgIn = document.querySelector(".msg-in");

const msgOut = document.querySelector(".msg-out");

const msjVacio = document.querySelector("#msj-vacio");

const boxMsj = document.querySelector("#msj-salida");


function botonEncriptar(){
  const txtEncriptado = encriptarMensaje(msgIn.value);
  msgOut.value = txtEncriptado;
  msgIn.value = "";
}

function encriptarMensaje(str){
  let numeros = /[0-9]/g;
  if(str === ""){
    alert("ingrese texto para encriptar");
    msgOut.value = txtDesencriptado;
    /*boxMsj.style.display = "none";
    msjVacio.style.display = "flex";*/
    msgIn.value = "";
  }  
  if(/[0-9]/g.test(str)){
    alert("solo letras minúsculas y sin acentos");
    msgIn.value = "";
    msgOut.value = txtDesencriptado;
    /*boxMsj.style.display = "none";
    msjVacio.style.display = "flex";*/
  }for(let i = 0; i < str.length; i ++){
    if(!/^[a-zA-Z\s]*$/.test(str)){
        alert("solo letras minúsculas y sin acentos");
        msgIn.value = "";
        msgOut.value = txtDesencriptado;
        /*boxMsj.style.display = "none";
        msjVacio.style.display = "flex";*/
      }else {
        if(str.includes("e")){str = str.replaceAll("e", "enter")}
        if(str.includes("i")){str = str.replaceAll("i", "imes")}
        if(str.includes("a")){str = str.replaceAll("a", "ai")}
        if(str.includes("o")){str = str.replaceAll("o", "ober")}
        if(str.includes("u")){str = str.replaceAll("u", "ufat")}
        return str;
      }
  }
}

function botonCopiar() {
  let contenido = document.querySelector(".msg-out");
  contenido.select();
  document.execCommand("copy");
}

function botonDesencriptar(){
  const txtDesencriptado = desencriptarMensaje(msgIn.value);
  msgOut.value = txtDesencriptado;
  msgOut.style.display = "flex";
  /*mjsOut.style.height = "180px";
  msjVacio.style.display = "none";*/
  msgIn.value = "";
}

function desencriptarMensaje(strEncriptado){
  if(strEncriptado === ""){
    alert("solo letras minúsculas y sin acentos");
    msgIn.value = "";
    msgOut.value = txtDesencriptado;
    /*boxMsj.style.display = "none";
    msjVacio.style.display = "flex";*/
  }
  for(let i = 0; i < strEncriptado.length; i ++){
    if(strEncriptado.includes("ufat")){strEncriptado = strEncriptado.replaceAll("ufat", "u")}
    if(strEncriptado.includes("ober")){strEncriptado = strEncriptado.replaceAll("ober", "o")}
    if(strEncriptado.includes("ai")){strEncriptado = strEncriptado.replaceAll("ai", "a")}
    if(strEncriptado.includes("imes")){strEncriptado = strEncriptado.replaceAll("imes", "i")}
    if(strEncriptado.includes("enter")){strEncriptado = strEncriptado.replaceAll("enter", "e")}
    return strEncriptado;
  }
}