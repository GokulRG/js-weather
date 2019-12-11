//Init Weather object
//Having a default value
const weather = new Weather('Sunnyvale');

//Get Weather on DOM Loads
document.addEventListener('DOMContentLoaded', getWeather);

//Wrap the getWeather call inside its own function and call it when DOM loads
function getWeather() {
    weather.getWeather().then(response => console.log(response)).catch(err => console.log(err));
}
