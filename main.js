let weatherCity = document.querySelector('.weather-city');
let weatherTemp = document.querySelector('.weather-temperature');
let weatherIcon = document.querySelector('.weather-icon');
let weatherDesc = document.querySelector('.weather-description');
let weatherHumidity = document.querySelector('.weather-humidity');
let weatherWind = document.querySelector('.weather-wind');
let weatherSearch = document.querySelector('.weather-search');
let searchBtn = document.querySelector('.fa-magnifying-glass');

let weather = {
    "apiKey" : "6aac2a015e14245cfef9183c16da6143",
    fetchWeather : function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        weatherCity.innerHTML = `Weather in: ${name}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
        weatherDesc.innerHTML = description;
        weatherTemp.innerHTML = `${temp}°C`;
        weatherHumidity.innerHTML = `Humidity: ${humidity}%`;
        weatherWind.innerHTML = `Wind speed: ${speed} km/h`;
    },
    search: function () {
        this.fetchWeather(weatherSearch.value); 
    }
};

searchBtn.addEventListener('click', function () {
    weather.search()
});

weatherSearch.addEventListener('keyup', function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});