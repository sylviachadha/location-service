function initMap() {
    const myLatlng = JSON.parse(document.getElementById('google-map-lat-long').getAttribute("latLng"));
    const city = document.getElementById('google-map-lat-long').getAttribute("city");

    console.log("LatLong: " + myLatlng)
    let map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 6
    });
    let marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: city // TODO
    });
    marker.setMap(map);
}
