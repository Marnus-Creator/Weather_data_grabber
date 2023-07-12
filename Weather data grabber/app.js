// Get the "Get Weather" button element
let getWeatherBtn = document.getElementById("getWeatherBtn");

// Attach a click event listener to the "Get Weather" button
getWeatherBtn.addEventListener("click", function () {

  // Get the value of the city input field
  let cityInput = document.getElementById("cityInput").value;

  // Get the weather data container element
  let weatherData = document.getElementById("weatherData");

  // Fetch the weather data for the specified city from the OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=d56a4a3597b70c891502841ee8f2b11c`)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Extract the relevant weather data from the API response
      let temperature = data.main.temp - 273.15;
      let feelsLike = data.main.feels_like - 273.15;
      let tempMin = data.main.temp_min - 273.15;
      let tempMax = data.main.temp_max - 273.15;
      let pressure = data.main.pressure;
      let humidity = data.main.humidity;
      let windSpeed = data.wind.speed;
      let windDegree = data.wind.deg;
      let cloudiness = data.clouds.all;
      let description = data.weather[0].description;

      // Build the HTML string to display the weather data
      weatherData.innerHTML =
        `
        <p>Temperature: ${temperature.toFixed(2)} &#8451;</p>
        <p>Feels Like: ${feelsLike.toFixed(2)} &#8451;</p>
        <p>Min Temperature: ${tempMin.toFixed(2)} &#8451;</p>
        <p>Max Temperature: ${tempMax.toFixed(2)} &#8451;</p>
        <p>Pressure: ${pressure} hPa</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Wind Direction: ${windDegree} &#176;</p>
        <p>Cloudiness: ${cloudiness}%</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });

});

// End of app.js
