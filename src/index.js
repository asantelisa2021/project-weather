function currentDate(time) {
  let hours = time.getHours();

  let minutes = time.getMinutes();

  let currentDay = time.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[currentDay];

  return `${day} ${hours}:${minutes}`;
}

let h1 = document.querySelector("h1");
let currentTime = new Date();
h1.innerHTML = currentDate(currentTime);

function showTempCity(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;

  let currentTemp = document.querySelector("#temp");
  let cityName = document.querySelector("#city");

  cityName.innerHTML = `${city}`;
  currentTemp.innerHTML = `${temperature}°C`;
}

function newCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let unit = "metric";
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${cityInput}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showTempCity);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", newCity);

function tempCity(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let currentCityName = response.data.name;

  let currentTemp = document.querySelector("#temp");
  let currentCity = document.querySelector("#city");

  currentTemp.innerHTML = `${temperature}°C`;
  currentCity.innerHTML = `${currentCityName}`;
}
