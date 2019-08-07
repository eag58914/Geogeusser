var map;
var input = document.querySelector('input');
var submit = document.querySelector('#submit');
var message = document.querySelector('span');
let dispVal = document.querySelector('p span');
let reset = document.querySelector('#reset');
let next = document.querySelector('#next');
let title = document.querySelector('h1');
var total;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 33.812511, lng: -117.918976 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 33.812511, lng: -117.918976 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap2() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 41.9484, lng: -87.6553 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 41.9484, lng: -87.6553 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap3() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 36.1699, lng: -115.1398 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 36.1699, lng: -115.1398 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap4() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 45.444958, lng: 12.328463 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 45.444958, lng: 12.328463 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}

function initMap5() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -0.180653, lng: -78.467834 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: -0.180653, lng: -78.467834 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap6() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 51.509865, lng: -0.118092 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 51.509865, lng: -0.118092 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap7() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 43.761539, lng: -79.411079 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 43.761539, lng: -79.411079 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap8() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -33.865143, lng: 151.2099 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: -33.865143, lng: 151.2099 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap9() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.334591, lng: 18.06324 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 59.334591, lng: 18.06324 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
function initMap10() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 30.274375, lng: -97.7408387 },
		zoom: 18,
		mapTypeId: 'satellite',
		mapTypeControl: false,
		disableDefaultUI: true,
		fullscreenControl: false
	});
	var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
		position: { lat: 30.274375, lng: -97.7408387 },
		pov: {
			heading: 34,
			pitch: 10
		}
	});
	map.setStreetView(panorama);
}
//functions to initilaize each map
function initializeSecondMap() {
	next.addEventListener('click', function() {
		initializeThirdMap();
	});
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'disneyland') {
			total += 250;
			input.value = '';
			render();
			setTimeout(initializeThirdMap, 1000);
		} else {
			submit.classList.add('apply-shake');
		}
	});
}
function initializeThirdMap() {
	next.addEventListener('click', function() {
		initializeFourthMap();
	});
	initMap2();
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'wrigely field') {
			total += 250;
			input.value = '';
			render();
			setTimeout(initializeFourthMap, 1000);
		} else {
			submit.classList.add('apply-shake');
		}
	});
}
function initializeFourthMap() {
	next.addEventListener('click', function() {
		initializeFifthMap();
	});
	initMap3();
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'las vegas') {
			total += 250;
			input.value = '';
			render();
			setTimeout(initializeFifthMap, 1000);
		}
	});
}
function initializeFifthMap() {
	next.addEventListener('click', function() {
		initializeSixthMap();
	});
	initMap4();
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'venice') {
			total += 250;
			input.value = '';
			render();
			setTimeout(initializeSixthMap, 1000);
		}
	});
}
function initializeSixthMap() {
	next.addEventListener('click', function() {
		initializeSeventhMap();
	});
	initMap5();
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'quito') {
			total += 250;
			input.value = '';
			setTimeout(initializeSeventhMap, 1000);
		}
	});
}
function initializeSeventhMap() {
	next.addEventListener('click', function() {
		initializeEigthMap();
	});
	initMap7();
	submit.addEventListener('click', function() {
		if (input.value.toLowerCase() === 'toronto') {
			total += 250;
			input.value = '';
			render();
			setTimeout(initializeEigthMap, 1000);
		}
	});
	function initializeEigthMap() {
		next.addEventListener('click', function() {
			initializeNinethMap();
		});
		initMap8();
		submit.addEventListener('click', function() {
			if (input.value.toLowerCase() === 'sydney') {
				total += 250;
				input.value = '';
				render();
				setTimeout(initializeNinethMap, 1000);
			}
		});
	}
	function initializeNinethMap() {
		next.addEventListener('click', function() {
			initializeTenthMap();
		});
		initMap9();
		submit.addEventListener('click', function() {
			if (input.value.toLowerCase() === 'stockholm') {
				total += 250;
				input.value = '';
				render();
				setTimeout(initializeTenthMap, 1000);
			}
		});
	}
	function initializeTenthMap() {
		next.addEventListener('click', function() {
			endGame();
		});
		initMap10();
		submit.addEventListener('click', function() {
			if (input.value.toLowerCase() === 'austin') {
				total += 250;
				input.value = '';
				render();
				setTimeout(endGame, 1000);
			}
		});
	}
	function endGame() {
		title.innerHTML = `Congratulations! Your score is ${total}`;
	}
}

function init() {
	total = 0;
	render();
}

function render() {
	dispVal.innerHTML = total;
	initializeSecondMap();
}

init();
