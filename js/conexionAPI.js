// Este archivo con esta función permite hacer la conexión al servidor json-server:

async function listarProductos() {

    // Se hace una petición o requisición de tipo GET (Porque sólo hay un parámetro en fetch()):
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    }); // Se hace una petición POST.
    
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}


export const conexionAPI = {
    listarProductos, enviarProducto
}