import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js"

async function filtrarVideo(evento){

    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        console.log(lista.firstChild)
        lista.removeChild(lista.firstChild);
    }

    lista.replaceChildren();

    busqueda.forEach(img => lista.appendChild(crearCard(img.imagen,img.titulo,img.descripcion)));
    
    if(busqueda.length===0){
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`
    }

    console.log(busqueda)
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento => filtrarVideo(evento))