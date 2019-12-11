//Init Storage
const storage = new Storage();

//Init Weather object, Having a default value
const weather = new Weather(storage.getCity());

//Initialize UI
const ui = new UI();

//Get Weather on DOM Loads
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;

    //Change City
    weather.changeLocation(city);
    
    //Set new city in local storage
    storage.setCity(city);

    //Get weather with new location
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
});

//Wrap the getWeather call inside its own function and call it when DOM loads
function getWeather() {
    weather.getWeather().then(response => ui.paint(response)).catch(err => console.log(err));
}
