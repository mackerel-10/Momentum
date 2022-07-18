function onGeoSuccess(position) { // GeolocationPosition Object를 받는다. 하나의 input으로.
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `http://localhost:3000/get-weather-data?lat=${lat}&lon=${lon}`;

	fetch(url).then(response => response.json().then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
		city.innerText = data.name;
	}));
}

function onGeoError() {
	console.log('error')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
