// INIT
const storage = new LocalStorage();

// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  // Close the modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}