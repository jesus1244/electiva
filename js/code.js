"use strict"
const loding = document.getElementById("code.js--poner-none")
const pagina = document.getElementById("code.js--quitar-none")
window.addEventListener("load",e=>{
    setTimeout(()=>{
        console.log("hola pañ")
    pagina.style.display=""
    loding.style.display="none"
    },1000)
})