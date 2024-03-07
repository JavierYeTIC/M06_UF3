let map;

        function initMap() {
            // Inicialitzar el mapa amb les coordenades de Barcelona
            const latlng = {lat: 41.390205, lng: 2.154007};
            map = new google.maps.Map(document.getElementById('map'), {
                center: latlng,
                zoom: 12
            });
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
                    map.setZoom(9);

                    let marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    });
                });
            }
        }