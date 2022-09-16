const form = document.querySelector("form");

class Location {
  constructor(city, latitude, longitude, wheater) {
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
    this.wheater = wheater;
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
  setWheater(weather) {
    this.wheater = weather.toFixed(2);
  }
  getWheater() {
    return this.wheater;
  }
}

let city = new Location();

async function getLocation() {
  const input = document.getElementById("cityName").value;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=7cea7239b0f46b49f70f491625a1e8f2`
  );
  const cityData = await response.json();
  city.setCity(cityData[0].name);
  city.setLatitude(cityData[0].lat);
  city.setLongitude(cityData[0].lon);
  return city;
}
async function getWheater() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.getLatitude()}&lon=${city.getLongitude()}&appid=7cea7239b0f46b49f70f491625a1e8f2`
  );
  const cityData = await response.json();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getLocation();
  await getWheater();
});
