//funcion para hacer crecer el textarea junto con el contenido
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "470px";
  this.style.height = (this.scrollHeight) + "px";
}

//variables y funciones para la accion de encriptar y desencriptar
const msjIn = document.querySelector(".msj-entrada");

const mjsOut = document.querySelector(".msj-salida");

const msjVacio = document.querySelector("#msj-vacio");

const boxMsj = document.querySelector("#msj-salida");


function botonEncriptar(){
  const txtEncriptado = encriptarMensaje(msjIn.value);
  mjsOut.value = txtEncriptado;
  boxMsj.style.display = "flex";
  mjsOut.style.height = "180px";
  msjVacio.style.display = "none";
  msjIn.value = "";
}

function encriptarMensaje(str){
  let numeros = /[0-9]/g;
  if(str === ""){
    alert("ingrese texto para encriptar");
    mjsOut.value = txtDesencriptado;
    boxMsj.style.display = "none";
    msjVacio.style.display = "flex";
    msjIn.value = "";
  }  
  if(/[0-9]/g.test(str)){
    alert("solo letras minúsculas y sin acentos");
    msjIn.value = "";
    mjsOut.value = txtDesencriptado;
    boxMsj.style.display = "none";
    msjVacio.style.display = "flex";
  }for(let i = 0; i < str.length; i ++){
    if(!/^[a-zA-Z\s]*$/.test(str)){
        alert("solo letras minúsculas y sin acentos");
        msjIn.value = "";
        mjsOut.value = txtDesencriptado;
        boxMsj.style.display = "none";
        msjVacio.style.display = "flex";
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
  let contenido = document.querySelector(".msj-salida");
  contenido.select();
  document.execCommand("copy");
}

function botonDesencriptar(){
  const txtDesencriptado = desencriptarMensaje(msjIn.value);
  mjsOut.value = txtDesencriptado;
  boxMsj.style.display = "flex";
  mjsOut.style.height = "180px";
  msjVacio.style.display = "none";
  msjIn.value = "";
}

function desencriptarMensaje(strEncriptado){
  if(strEncriptado === ""){
    alert("solo letras minúsculas y sin acentos");
    msjIn.value = "";
    mjsOut.value = txtDesencriptado;
    boxMsj.style.display = "none";
    msjVacio.style.display = "flex";
  }
  for(let i = 0; i < strEncriptado.length; i ++){
    if(strEncriptado.includes("enter")){strEncriptado = strEncriptado.replaceAll("enter", "e")}
    if(strEncriptado.includes("imes")){strEncriptado = strEncriptado.replaceAll("imes", "i")}
    if(strEncriptado.includes("ai")){strEncriptado = strEncriptado.replaceAll("ai", "a")}
    if(strEncriptado.includes("ober")){strEncriptado = strEncriptado.replaceAll("ober", "o")}
    if(strEncriptado.includes("ufat")){strEncriptado = strEncriptado.replaceAll("ufat", "u")}
    return strEncriptado;
  }
}