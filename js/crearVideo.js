import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearImagen(evento){

    evento.preventDefault();

    const imagen= document.querySelector("[data-url]").value;
    const  titulo= document.querySelector("[data-titulo]").value;
    const  precio= document.querySelector("[data-imagen]").value;

    try{
    await conexionAPI.enviarVideo(titulo,precio,imagen);
    window.location.href="/index.html"
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit",evento => crearImagen(evento));