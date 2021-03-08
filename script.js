let apiKey = "371481ddae889a21364fca010d5f896c";

let city = "";

const form = document.querySelector("form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  city = document.getElementById("type-city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metric`;
  axios.get(url).then((response) => showWeather(response, city));
});

function showWeather(response, city) {
  let temperature = Math.round(response.data.main.temp);
  let message = `It is ${temperature}ºC in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your location is ${position.coords.latitude} and your longtitude is ${position.coords.longtitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
