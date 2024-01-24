document.write('<script src ="./key.js"></script>');

function makeApiRequest() {
  console.log(apiKey);
}

makeApiRequest();

const inputContainer = document.getElementById("inputContainer");
const cityInput = document.getElementById("cityInput");

function getWeather() {
  inputContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      fetchWeatherData(city);
    }
  });
}
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    const weatherInfo = document.getElementById("weatherInfo");
    // const cityName = document.getElementByClassName("p1");
    weatherInfo.style.display = "block";
    // cityName.innerHTML = `${city}`;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    const weatherHTML = `
          <h2>Weather in ${city}</h2>
          <p>Description: ${weatherDescription}</p>
          <p>Temperature: ${temperature}C</p>
          <p >Humidity:</p>`;
    weatherInfo.innerHTML = weatherHTML;
  } catch (error) {}
}
