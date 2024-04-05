let districteSelect = document.getElementById("districte");
let barriSelect = document.getElementById("barri");

fetch("districtes.php")
    .then((response) => response.json())
    .then((data) => {
        let options = "";
        let predefinit = '<option value="" selected disabled>Selecciona un districte</option>';
        data.forEach(districte => {
            options += `<option id="districte" value="${districte.id}">${districte.name}</option>`;
        });

        districteSelect.innerHTML = predefinit + options;
    })
    .catch(error => console.log("Error: ", error));

districteSelect.addEventListener("change", function () {
    // Netejar el select de subcategories perquè no s'acumulin
    barriSelect.innerHTML = "";

    // Recuperar la opció seleccionada
    let opcioActual = this.options[districteSelect.selectedIndex];

    // Creem el formData i afegim el valor seleccionat
    let formData = new FormData();
    formData.append("dis", opcioActual.value);

    // Opcions per a la solicitud FETCH
    let options = {
        method: 'POST',
        body: formData
    }

    // Solicitud FETCH al fitxer php
    fetch("barri.php", options)
        .then((response) => response.json())
        .then((data) => {
            data.sort((a, b) => a.name.localeCompare(b.name));
            let opcions = "";
            let predefinit = '<option value="" selected disabled>Selecciona un barri</option>';
            data.forEach(barri => {
                opcions += `<option id="barri" value="${barri.id}">${barri.name}</option>`;
            });
            barriSelect.innerHTML = predefinit + opcions;
        })
        .catch((error) => {
            console.log("Error en la solicitud FETCH:", error);
        });
});

function mapa() {
    let via = document.getElementById("via").value;
    let nom_via = document.getElementById("nom_via").value;
    let numero = document.getElementById("numero").value;

    let geocoder = new google.maps.Geocoder();
    let address = via + " " + nom_via + " " + numero + ", Barcelona";
    let latIpnut = document.getElementById("latitud");
    let longInput = document.getElementById("longitud");

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitud = results[0].geometry.location.lat();
            let longitud = results[0].geometry.location.lng();
            latIpnut.value = latitud;
            longInput.value = longitud;
        } else {
            alert("La localització no s'ha trobat");
        }
    })
}
document.getElementById("numero").addEventListener("change", mapa);

function mostrarDades() {
    let nom = document.getElementById("nom").value;
    let barri = document.getElementById("barri").value;
    let districte = document.getElementById("districte").value;
    let via = document.getElementById("via").value;
    let nom_via = document.getElementById("nom_via").value;
    let numero = document.getElementById("numero").value;
    let pis = document.getElementById("pis").value;
    let escala = document.getElementById("escala").value;
    let porta = document.getElementById("porta").value;
    let cp = document.getElementById("cp").value;
    let poblacio = document.getElementById("poblacio").value;
    let preu = document.getElementById("preu").value;
    let descripcio = document.querySelector('textarea[name="descripcio"]').value;

    document.getElementById("nomPis").innerHTML = nom + " " + barri + ", " + districte;
    document.getElementById("dir").innerHTML = via + " " + nom_via + " " + numero + " " + pis + " " + escala + " " + porta + " · " + cp + " · " + districte + " · " + barri + " · " + poblacio;
    document.getElementById("preu").innerHTML = preu;
    document.getElementById("desc").innerHTML = descripcio;

}