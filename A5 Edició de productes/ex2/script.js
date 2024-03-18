let btnEdit = document.querySelectorAll(".btnEdit");
    btnEdit.forEach(el=>{
        el.addEventListener("click", function(){

            let formData = new FormData();
            formData.append("id", this.getAttribute("idProd"));

            let options = {
                    method: 'POST',
                    body: formData
                }

            fetch("getProducte.php", options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("nomProducte").value = data.nom;
                document.getElementById("addEdit").value = data.addEdit;
            })
            .catch((error) => {});

        })
    })

function removeProduct(id) {
    // Realizar la eliminación del producto haciendo una solicitud al servidor
    fetch('ex2Delete.php?id=' + id, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            location.reload();
            // Eliminar la fila de la tabla
            document.getElementById('row_' + id).remove();
       
        } else {
            console.error('Error al eliminar el producto');
        }
    })
    .catch(error => {
        console.error('Error al eliminar el producto:', error);
    });
}

    