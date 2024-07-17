import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(imagen,titulo,precio){
    const img = document.createElement("li");
    
    img.className="videos__item";
    img.innerHTML = `<div class="contenedorCard">
                        <img src=${imagen} width="350px" height="250px"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen scrolling="none">
                        <div class="descripcion-video">
                            <h3>${titulo}</h3>
                            <h3>${precio}</h3>
                            <div class="imagenes__descripcion__eliminar">
                                <img src="./img/logotipo mandala.jpg" alt="logo canal alura">
                                <img src="./img/borrar.png" alt="logo canal alura" data-eliminar>
                            <div/>
                        </div>
                        
                    </div>
            `;
            
    return img;
}

const remove = (id) => {
    const button = id.target;
    if(button && button.matches("[data-eliminar]")){
        button.closest(".videos__item").remove();
    }
}

    document.addEventListener("click", (id) => {
        if (id.target.matches("[data-eliminar]")){
            remove(id);
        }
    })

/*
const remove = (id) => {
    const imagenRemove = document.querySelector("[data-eliminar]")
    if (imagenRemove){
        imagenRemove.parentElement.removeChild(imagenRemove);
    }
}*/

/*const producto = document.querySelector("[data-eliminar]");
producto.addEventListener(click, async (evento) =>{
    preventDefault();
    await conexionAPI.borraraProducto(id);
    producto.remove();
})*/



async function listarVideos(){
    try{
        const listaAPI = await conexionAPI.listarVideos()
    
        listaAPI.forEach(img => lista.appendChild(crearCard(img.imagen,img.titulo,img.precio)))
    }catch{
        lista.innerHTML= `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`
    }
    }

listarVideos()