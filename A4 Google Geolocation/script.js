let map;
let marker; // Variable global para el marcador

function initMap() {
    // Inicialitzar el mapa amb les coordenades de Barcelona
    const latlng = {lat: 41.390205, lng: 2.154007};
    map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12
    });

    map.addListener('click', function(event) {
        addMarker(event.latLng);
    });
}
function addMarker(location) {
    // Eliminar el marcador anterior, si existe
    if (marker) {
        marker.setMap(null);
    }

    // Crear un nuevo marcador en la ubicación especificada
    marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true // Permitir que el marcador se pueda arrastrar
    });

    // Agregar un evento de clic al marcador para mostrar información
    marker.addListener('click', function() {
        showInfoWindow(marker);
    });

    // Actualizar los valores de latitud y longitud en los inputs
    document.getElementById('latitude').value = location.lat();
    document.getElementById('longitude').value = location.lng();
}

function showInfoWindow(marker) {
    // Crear una ventana de información
    let infoWindow = new google.maps.InfoWindow({
        content: '<div>' +
                 '<p>Hola,soy javier</p>' +
                 '</div>'
    });

    // Abrir la ventana de información en el marcador
    infoWindow.open(map, marker);
}


function buscarAdreca() {
    let adreca = document.getElementById('adreca').value;
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': adreca }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();

            // Centrar el mapa a la nova localització i incrementar el zoom
            let center = new google.maps.LatLng(latitude, longitude);
            map.setCenter(center);
            map.setZoom(16);

            // Afegir un marker a la nova localització
            let marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: map,
            });

            // Actualitzar els valors dels inputs
            document.getElementById('latitude').value = latitude;
            document.getElementById('longitude').value = longitude;
        } else {
            alert('L\'adreça no s\'ha trobat.');
        }
    });
}

function geolocalitzacio() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setZoom(15);

            let marker = new google.maps.Marker({
                position: pos,
                map: map
            });
        });
    }
}