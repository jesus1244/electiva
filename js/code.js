"use strict"
const loding = document.getElementById("code.js--poner-none")
const pagina = document.getElementById("code.js--quitar-none")
const marquee = document.getElementById("code.js--marquee")
const video = document.getElementById("code.js--video")
const img = document.getElementById("code.js--img")

console.log(video.naturalWidth)
video.addEventListener("loaddata",e=>{
    console.log("te doy la mano")
    img.style.height = `${video.naturalHeight}px`
})

window.addEventListener("load",e=>{
    setTimeout(()=>{
    pagina.removeAttribute("hidden");
    marquee.style.height = ""
    loding.style.display="none"
    },1000)
})