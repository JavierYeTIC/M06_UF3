<p idProd="1" class="btnEdit btn btn-outline-info">Edit</p>
<script>
    let btnEdit = document.querySelectorAll(".btnEdit");
    btnEdit.forEach(el => {
        el.addEventListener("click", function() {
            let id = this.getAttribute("idProd");
            fetch(`getProducte.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    // Assign data to form fields
                    document.getElementById("nomProducte").value = data.nom;
                    document.getElementById("addEdit").value = data.addEdit;
                })
                .catch(error => console.error('Error:', error));
        });
    });
</script>
