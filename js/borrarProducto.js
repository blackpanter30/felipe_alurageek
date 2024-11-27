async function borrarProducto(id) {

    try {
            // Llamada a la API para eliminar el producto del db.json:
            const respuesta = await fetch(`http://localhost:3001/productos/${id}`, {
                method: 'DELETE'
            });

            if(respuesta.ok){
                // Si la eliminación es exitosa, elimina el elemento del HTML:
                const producto = document.getElementById(id);
                if(producto){
                    producto.remove();
                    console.log(`Producto con ID ${id} eliminado exitosamente.`);
                }
            }
            else{
                console.error('Error al eliminar el producto:', respuesta.status);
            }
        }
    catch(error) {
        console.error('Error en la solicitud:', error);
    } 
}