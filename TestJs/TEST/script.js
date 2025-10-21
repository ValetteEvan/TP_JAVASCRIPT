
const inputField = document.getElementById("sampleInput");
const buttonToUpper = document.getElementById("toUpperCaseButton");
const buttonToLower = document.getElementById("toLowerCaseButton");
const testButton = document.getElementById("testButton");

const value = inputField.value;

var result = 0;

testButton.addEventListener("click", () => {
    result++;
    document.getElementById("testResult").innerText = `Button clicked ${result} times`;
});

function valueChanged(value) {
    document.getElementById("sampleOutput").innerText = `Input value: ${value}`;
}

inputField.addEventListener("input", () => {
    const value = inputField.value;
    valueChanged(value);    
});

buttonToUpper.addEventListener("click", () => {
    const value = inputField.value;
    valueChanged(value.toUpperCase());
});

buttonToLower.addEventListener("click", () => {
    const value = inputField.value;
    valueChanged(value.toLowerCase());
});

// Api meteo https://open-meteo.com/
const getWeatherButton = document.getElementById('getWeatherButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const weatherError = document.getElementById('weatherError');

getWeatherButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherResult.textContent = 'Please enter a city name.';
        weatherError.textContent = '';
        return;
    }

    try {
        weatherResult.textContent = 'Loading...';
        weatherError.textContent = '';

        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            weatherResult.textContent = '';
            weatherError.textContent = `City "${city}" not found. Please try another city.`;
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current_weather.temperature;
        const windSpeed = weatherData.current_weather.windspeed;

        weatherResult.textContent = `Current temperature in ${name}, ${country} is ${temperature}°C (Wind: ${windSpeed} km/h)`;
        weatherError.textContent = '';

    } catch (error) {
        weatherResult.textContent = '';
        weatherError.textContent = 'Error fetching weather data. Please try again later.';
        console.error('Error:', error);
    }
});
