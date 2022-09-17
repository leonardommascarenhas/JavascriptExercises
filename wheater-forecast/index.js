const form = document.querySelector("form");

class Location {
  constructor(city, latitude, longitude, weather, temperature) {
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
    this.weather = weather;
    this.temperature = temperature;
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
    this.temperature = temp;
  }
  getTemperature() {
    return this.temp;
  }
}

let city = new Location();

const getLocation = async () => {
  const input = document.getElementById("cityName").value;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=7cea7239b0f46b49f70f491625a1e8f2`
  );
  const cityData = await response.json();
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
  const temp = cityData.main.temp;
  city.setWeather(weather);
  city.setTemperature(temp);
  console.log(temp);
  console.log(cityData);
  console.log(weather);
  console.log(city);
};
const displayCity = async () => {};
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getLocation();
  await getWeather();
});
