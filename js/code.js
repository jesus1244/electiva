"use strict"
const loding = document.getElementById("code.js--poner-none")
const pagina = document.getElementById("code.js--quitar-none")
const marquee = document.getElementById("code.js--marquee")
window.addEventListener("load",e=>{
    setTimeout(()=>{
    pagina.removeAttribute("hidden");
    marquee.style.height = ""
    loding.style.display="none"
    },1000)
})