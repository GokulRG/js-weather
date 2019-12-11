class Weather {
    constructor(city) {
        this.api_key = 'c263398a1e2bbe85082b1396f5c5b3c2';
        this.city = city;
    }

    changeLocation(city) {
        this.city = city;
    }
    
    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }
}