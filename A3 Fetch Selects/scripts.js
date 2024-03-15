function getSubCategories() {
    // Obtener el valor seleccionado de la categoría
    let selectedCategoria = document.getElementById("categoria").value;

    // Configuración de la opción Fetch
    let formData = new FormData();
    formData.append('categoria', selectedCategoria);

    let options = {
        method: 'POST',
        body: formData
    };

    // Fetch para obtener las subcategorías
    fetch("getSubCats.php", options)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud AJAX: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            let subcatSelect = document.getElementById("subcategoria");
            subcatSelect.innerHTML = '';

            if (data.error) {
                console.error(data.error);
                return;
            }

            data.forEach(el => {
                var opt = document.createElement('option');
                opt.value = el.id;
                opt.text = el.nom;
                subcatSelect.appendChild(opt);
            });
        })
        .catch(error => console.error(error));
}
