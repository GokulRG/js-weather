class Storage {
    constructor() {
        this.city = 'Sunnyvale';
    }

    setCity(city) {
        localStorage.setItem('city',city);
    }

    getCity() {
        this.city = localStorage.getItem('city') ? localStorage.getItem('city') : 'Sunnyvale';
        return this.city;
    }
}