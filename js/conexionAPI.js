async function listarVideos (){
    const conexion = await fetch ("http://localhost:3001/imagenes");
    
    const conexionConvertida = conexion.json();

   // console.log(conexionConvertida);

   return conexionConvertida
}
async function enviarVideo(titulo, precio, imagen){
    const conexion = await fetch("http://localhost:3001/imagenes",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            precio: precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video")
    }

    return conexionConvertida;
}


async function borraraProducto(id){
    try{
        const conexion = await fetch(`http://localhost:3001/imagenes/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        });
            if(!conexion.ok){
                throw new Error ("Error de la solicitud")
            }
        }catch (error){
            console.error("Error al eliminar el producto",error);
        }
    }




//para hacer busquedas, por el momento no esta en funcion
async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/imagenes?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

export const conexionAPI ={
    listarVideos, enviarVideo, buscarVideos, borraraProducto
}
