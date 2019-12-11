//Init Weather object
//Having a default value
const weather = new Weather('Sunnyvale');
const ui = new UI();

//Get Weather on DOM Loads
document.addEventListener('DOMContentLoaded', getWeather);

//Wrap the getWeather call inside its own function and call it when DOM loads
function getWeather() {
    weather.getWeather().then(response => ui.paint(response)).catch(err => console.log(err));
}
