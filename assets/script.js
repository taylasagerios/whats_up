var apiKey = "362cbe9d61e170732a21343e28d7a203";
var cityValue = document.querySelector("#input-element");
var submitBtn = document.querySelector("#submit-btn");

function getWeather() {
    console.log("CITY VALUE: ", cityValue.value)
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue.value + "&appid=" + apiKey + "&units=imperial";
    fetch(queryUrl)
        .then(function (response) {
            console.log("Response: ", response);
            return response.json();
        })
        .then(function (data) {
            console.log("DATA: ", data)
            var forecast = filterForecast(data.list)
            fillForecastHtml(forecast)
        })
}
// function getweathercities() {
//     // Save related form data as an object
//     var info = {
//         cityName: cityValue.value,
//     };
//     // Use .setItem() to s
//     localStorage.setItem("cityName", JSON.stringify(cityName));
// }


function filterForecast(allWeatherForecasts) {
    console.log(allWeatherForecasts)
    // var data = allWeatherForecasts[0]
    // var arr = {
    //     date: data.dt,
    //     temp: data.main.temp,
    //     wind: data.wind,
    //     humidity: data.main.humidity
    // }
    var fivedayforecast = document.querySelector("#five-day-forecast")
    var forecast = []


    for (var i = 0; i < allWeatherForecasts.length; i += 8) {
        var data = allWeatherForecasts[i]
        var forecastData = {
            date: data.dt_txt,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            wind: data.wind.speed,
            humidity: data.main.humidity
        }


        var card = document.createElement("div")
        card.setAttribute("class", "col-2 card card-rounded border-color-black bg-grey")
        var temp = document.createElement("p")
        var wind = document.createElement("p")
        var humidity = document.createElement("p")
        var date = document.createElement("p")
        var img = document.createElement("img")
        img.setAttribute("src", `https://openweathermap.org/img/wn/${forecastData.icon}@2x.png`)
        temp.textContent = "Temp:" + forecastData.temp
        wind.textContent = "Wind:" + forecastData.wind
        humidity.textContent = "Humidity"+ forecastData.humidity +"%"
        date.textContent = forecastData.date
        card.append(date, temp, wind, humidity, img)
        fivedayforecast.append(card)

    }
    // console.log(date+'',temp+'',wind+'',+humidity);
    console.log("forecast:", forecast)
    return forecast
}

function fillForecastHtml(forecast) {
    for (var x = 0; x < forecast.length; x++) {
        var tempEl = document.querySelector(`#temp-${x}`)
        console.log(tempEl)

    }
}


submitBtn.addEventListener("click", getWeather);

function getweathercities() {
    // Save related form data as an object
    var info = {
        cityName: cityValue.value,
    };
    // Use .setItem() to s
    localStorage.setItem("cityName", JSON.stringify(cityName));
}

