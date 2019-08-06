var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 15
	});
	map.setMapTypeId('satellite');
	map.setTilt(45);
}
