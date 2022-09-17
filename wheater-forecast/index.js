const form = document.querySelector("form");

class Location {
  constructor(city, country, latitude, longitude, weather, temperature, icon, feelsLike, min, max) {
    this.city = city;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.weather = weather;
    this.temperature = temperature;
    this.icon = icon;
    this.feelsLike = feelsLike;
    this.min = min;
    this.max = max;
  }
  setCity(city) {
    this.city = city;
  }
  getCity() {
    return this.city;
  }
  setCountry(country) {
    this.country = country;
  }
  getCountry() {
    return this.country;
  }
  setLatitude(latitude) {
    this.latitude = latitude.toFixed(2);
  }
  getLatitude() {
    return this.latitude;
  }
  setLongitude(longitude) {
    this.longitude = longitude.toFixed(2);
  }
  getLongitude() {
    return this.longitude;
  }
  setWeather(weather) {
    this.weather = weather;
  }
  getWeather() {
    return this.weather;
  }
  setTemperature(temp) {
    this.temperature = Math.trunc(temp);
  }
  getTemperature() {
    return this.temperature;
  }
  setIcon(icon) {
    this.icon = icon;
  }
  getIcon() {
    return this.icon;
  }
  setFeelsLike(feelsLike) {
    this.feelsLike = feelsLike;
  }
  getFeelsLike() {
    return this.feelsLike;
  }
  setMin(min) {
    this.min = min;
  }
  getMin() {
    return this.min;
  }
  setMax(max) {
    this.max = max;
  }
  getMax() {
    return this.max;
  }
}

let city = new Location();

const getLocation = async () => {
  const input = document.getElementById("cityName").value;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=7cea7239b0f46b49f70f491625a1e8f2`
  );
  const cityData = await response.json();
  console.log(cityData);
  city.setCity(cityData[0].name);
  city.setCountry(cityData[0].country);
  city.setLatitude(cityData[0].lat);
  city.setLongitude(cityData[0].lon);
  return city;
};
const getWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.getLatitude()}&lon=${city.getLongitude()}&appid=7cea7239b0f46b49f70f491625a1e8f2&units=metric`
  );
  const cityData = await response.json();
  const weather = cityData.weather[0].description;
  const icon = cityData.weather[0].icon;
  const temp = cityData.main.temp;
  const feelsLike = cityData.main.feels_like;
  const min = cityData.main.temp_min;
  const max = cityData.main.temp_max;
  city.setWeather(weather);
  city.setTemperature(temp);
  city.setIcon(icon);
  city.setFeelsLike(feelsLike);
  city.setMin(min);
  city.setMax(max);
  console.log(cityData);
  console.log(city);
};

const displayCity = async () => {
  const display = document.querySelector(".weatherDisplay");
  const icon = document.querySelector("#icon");
  const cityName = document.querySelector("#city");
  const countryName = document.querySelector("#country");
  const weather = document.querySelector("#weather");
  const temp = document.querySelector("#temp");
  const feels_like = document.querySelector("#feels_like");
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");
  display.style.display = "flex";
  display.style.flexDirection = "column";
  display.style.transition = "ease-in 0.5s;";
  display.style.alignItems = "center";
  icon.src = `http://openweathermap.org/img/wn/${city.getIcon()}@2x.png`;
  weather.innerText = city.getWeather();
  temp.innerText = `${city.getTemperature()} °C`;
  cityName.innerText = city.getCity();
  countryName.innerText = city.getCountry();
  feels_like.innerText = city.getFeelsLike();
  min.innerText = city.getMin();
  max.innerHTML = city.getMax();
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getLocation();
  await getWeather();
  await displayCity();
});
