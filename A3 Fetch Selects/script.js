function getSubCategories() {
    // Obtenir el valor seleccionat de la categoria
    let selectedCategoria = document.getElementById("categoria").value;

    // Configuració de l'opció Fetch
    let formData = new FormData();
    formData.append("cat", selectedCategoria);

    let options = {
        method: 'POST',
        body: formData
    };

    // Fetch per obtenir les subcategories
    fetch("getSubCats.php", options)
        .then(response => response.json())
        .then(data => {
            // Esborra les opcions anteriors del selector de subcategories
            let subcatSelect = document.getElementById("subcategoria");
            subcatSelect.innerHTML = '';

            // Afegeix les noves opcions del JSON obtingut
            data.forEach(el => {
                var opt = document.createElement('option');
                opt.value = el.id;
                opt.text = el.nom;
                subcatSelect.appendChild(opt);
            });
        })
        .catch(error => console.log(error));
}
