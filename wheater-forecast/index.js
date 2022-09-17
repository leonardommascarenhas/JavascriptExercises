const form = document.querySelector("form");

class Location {
  constructor(city, latitude, longitude, weather, temperature, icon) {
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
    this.weather = weather;
    this.temperature = temperature;
    this.icon = icon;
  }
  setCity(city) {
    this.city = city;
  }
  getCity() {
    return this.city;
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
  city.setLatitude(cityData[0].lat);
  city.setLongitude(cityData[0].lon);
  return city;
};
const getWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.getLatitude()}&lon=${city.getLongitude()}&appid=7cea7239b0f46b49f70f491625a1e8f2&units=metric`
  );
  const cityData = await response.json();
  const weather = cityData.weather[0].main;
  const icon = cityData.weather[0].icon;
  const temp = cityData.main.temp;
  city.setWeather(weather);
  city.setTemperature(temp);
  city.setIcon(icon);
  console.log(cityData);
  console.log(city);
};

const displayCity = async () => {
  const display = document.querySelector(".weatherDisplay");
  const icon = document.querySelector("#icon");
  const cityName = document.querySelector("#city");
  const weather = document.querySelector("#weather");
  const temp = document.querySelector("#temp");
  display.style.display = "flex";
  display.style.flexDirection = "column";
  icon.src = `http://openweathermap.org/img/wn/${city.getIcon()}@2x.png`;
  weather.innerText = city.getWeather();
  temp.innerText = `${city.getTemperature()} °C`;
  cityName.innerText = city.getCity();
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getLocation();
  await getWeather();
  await displayCity();
});
