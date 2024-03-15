document.addEventListener("DOMContentLoaded", function() {
    let btnEdit = document.querySelectorAll(".btnEdit");
    btnEdit.forEach(el => {
        el.addEventListener("click", function() {
            let id = this.getAttribute("idProd");
            fetch(`getProducte.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("nomProducte").value = data.nom;
                    document.getElementById("addEdit").value = data.addEdit;
                })
                .catch(error => console.error('Error:', error));
        });
    });
});
