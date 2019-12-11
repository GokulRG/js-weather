class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.templow = document.getElementById('w-templow');
        this.tempcurrent = document.getElementById('w-tempcurrent');
        this.temphigh = document.getElementById('w-temphigh');
        this.sunrise = document.getElementById('w-sunrise');
        this.sunset = document.getElementById('w-sunset');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.weather[0].description;
        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} %`;
        this.templow.textContent = `Min Temperature : ${weather.main.temp_min} °C`;
        this.temphigh.textContent = `Max Temperature : ${weather.main.temp_max} °C`;
        this.tempcurrent.textContent = `Current Temperature : ${weather.main.temp} °C`;
        const sunriseDate = new Date(0);
        sunriseDate.setUTCSeconds(weather.sys.sunrise);
        this.sunrise.textContent = `Time of Sunrise : ${sunriseDate.toLocaleTimeString()}`;
        const sunsetDate = new Date(0);
        sunsetDate.setUTCSeconds(weather.sys.sunset);
        this.sunset.textContent = `Time of Sunset : ${sunsetDate.toLocaleTimeString()}`;
    }
}